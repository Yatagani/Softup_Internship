const encodeImageFileAsURL = async (file, setState) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
  
    reader.onload = () => {
      setState(reader.result);
    };
  
    reader.onerror = (error) => {
      console.log(error);
      return undefined;
    };
  };

  export default encodeImageFileAsURL;