/**
 * GET /welcome
 * Sanity check route. Returns '👋 Hello, World!'
 */
export const welcome = (req, res) => {
  const { name } = req.params
  name ? res.send(`👋 Hello, ${name}!`) : res.send('👋 Hello, World!')
}