import About from './About'
function Body() {
  return (
     <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" tabIndex="0" className="position-relative overflow-scroll vh-100">
        <About count="1"></About>
        <About count="2"></About>
        <About count="3"></About>
    </div>
  );
}

export default Body;
