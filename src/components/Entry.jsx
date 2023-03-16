import React from "react";

function Entry({ id, emoji, name, meaning }) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {emoji}
        </span>
        <span>{name}</span>
      </dt>
      <dd>{meaning}</dd>
    </div>
  );
}
export default Entry;
