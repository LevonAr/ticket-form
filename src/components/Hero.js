function stripHTML(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}

const Hero = (props) => {
    const { band = {} } = props;
    const { imgUrl = '' } = band;
    const description = stripHTML(band?.description_blurb);
    return (
      <>
        <img src={imgUrl} height={400} width={400} />
        <p>{description}</p>
      </>
    );
  };
  
  export default Hero;