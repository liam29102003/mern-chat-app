import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
export const sendMessage = async(req, res) => {
        try {
            const {message} = req.body;
            const {id: receiverId} = req.params;
            const senderId = req.user._id ;
            let conversation = await Conversation.findOne({
                participants: { $all: [senderId, receiverId]},
            })
            if(!conversation){
                conversation = await Conversation.create({
                    participants: [senderId, receiverId]
                })
            }
            const newMessage = new Message({
                senderId,
                receiverId,
                message
            })
            if(newMessage)
                {
                    conversation.messages.push(newMessage._id);

                    // await newMessage.save();
                    // await conversation.save();
                    await Promise.all([newMessage.save(), conversation.save()]); // execute in parallel
                }
            res.send(newMessage);
        } catch (error) {
            console.error(error);
            res.status(500).json({msg: "Server Error"});
        }
}
export const getMessage = async(req, res) => {
    try {
        const {id:userToCheckId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToCheckId]},
        }).populate("messages"); //no reference but actual messages;

        if(!conversation){
           return res.status(200).json([]);

        }
        
        res.status(200).json(conversation.messages);


    } catch (error) {
            console.error(error);
            res.status(500).json({msg: "Server Error"});
    }
}