import { Readable } from 'stream'

const buffer = new Buffer(img_string, 'base64')
const readable = new Readable()
readable._read = () => {} // _read is required but you can noop it
readable.push(buffer)
readable.push(null)

readable.pipe(consumer) // consume the stream

// Set a `name` that ends with .png so that the API knows it's a PNG image
buffer.name = "image.png";
const response = await openai.createImageVariation(
  buffer,
  1,
  "1024x1024"
);