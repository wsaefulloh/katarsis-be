function newLink(url) {
  const linkArray = url.split("/");
  const index = linkArray.indexOf("view?usp=sharing");
  let linkDummy =
    "https://drive.google.com/file/d/1QKfqbqXULITqo6idXridkMxQ0FYZ26O9/view?usp=sharing";
  const linkArrayDummy = linkDummy.split("/");
  const indexDummy = linkArrayDummy.indexOf("view?usp=sharing");
  const resultDumy = linkArrayDummy[indexDummy - 1];
  let result = linkArray[index - 1];
  if (result == undefined) {
    return resultDumy;
  } else {
    return result;
  }
}

module.exports = newLink;
