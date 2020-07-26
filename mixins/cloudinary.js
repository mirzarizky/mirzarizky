export default {
  methods: {
    cloudinary_url(path, transform = '') {
      const cloudinary = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`
      const imageTransform = transform ? transform + '/' : ''

      return cloudinary + imageTransform + path
    }
  }
}
