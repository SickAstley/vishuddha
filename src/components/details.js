import React from "react";
import Container from "./container";

const Details = () => {
  return (
    <Container>
      <h4 className="text-lg">
        Plexus is a crowdsourced project that relies on the community. You can
        contribute{" "}
        <a
          className="text-brand font-semibold hover:text-brand-dark"
          href="https://github.com/techlore-official/plexus"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </h4>
    </Container>
  );
};

export default Details;
