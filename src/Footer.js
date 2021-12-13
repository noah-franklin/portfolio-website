import "./Footer.css";

function Footer(props) {
  return (
    <div class="container-fluid footer pt-1 pb-1">
      Photo by{" "}
      <a href="https://unsplash.com/@garrettpatz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Garrett Patz
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/s/photos/hills-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Unsplash
      </a>
    </div>
  );
}

export default Footer;
