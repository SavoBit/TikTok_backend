import mongoose from 'mongoose';

const tiktokSchema = mongoose.Schema({
	id:String,
    url:String,
    poster:String,
    channel:String,
    desc:String,
    song:String,
    likes:String,
    shares:String,
    messages:String,
});

// Collection inside the database
export default mongoose.model('tiktokVideos' , tiktokSchema)