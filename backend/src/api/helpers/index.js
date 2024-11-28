const base64url = str =>{
  return btoa(str)
  .replace(/\+/g, '-') // Replace all '+' with '-'
  .replace(/\//g, '_') // Replace all '/' with '_'
  .replace(/=+$/, ''); // Remove trailing '='
}

module.exports = {base64url}