
function About(props) {
  
  let count = "scrollspyHeading" + props.count
  console.log(count)
  return (
     <div className="vh-100" id={count}>
        HIIIII
    </div>
  );
}

export default About;
