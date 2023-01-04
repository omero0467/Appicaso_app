import {v2 as cloudinary} from 'cloudinary'
// const resizeUrl = `https://res.cloudinary.com/dmyv0thmy/image/upload/w_${size},h_${size},c_fill/${publicId}`


export const removeBackground =async (req,res) =>{
    try{const removedBg = await cloudinary.uploader
    .upload(req.body.file, 
      { quality_analysis:true,
        unique_filename: true,
        background_removal: "cloudinary_ai",
        notification_url: "https://mysite.example.com/hooks" })
        console.log(removedBg);
        res.send(removedBg)
    }catch(error){
        console.log(error);
        res.status(400).send({message:"bad request",
    trigger:`${removeBackground}`, error})
    }
}


// cloudinary.v2.uploader
// .upload("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
// .then(result=>console.log(result));