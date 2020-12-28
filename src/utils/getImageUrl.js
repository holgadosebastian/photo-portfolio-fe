const getImageUrl = (imageUrl) => {
  return process.env.NODE_ENV !== "development"
    ? imageUrl
    : process.env.REACT_APP_BACKEND_URL + imageUrl
}

export default getImageUrl