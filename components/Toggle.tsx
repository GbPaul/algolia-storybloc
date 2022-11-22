import { useState } from "react";
import { useToggleRefinement } from "react-instantsearch-hooks-web";

const ToggleRefinement = (props: { attribute: string }) => {
  const [checked, setChecked] = useState<boolean>(true);

  const { refine } = useToggleRefinement({ attribute: props.attribute });

  return (
    <div className="toggle">
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => {
            setChecked((prevState) => !prevState);
            refine({ isRefined: !event.target.checked });
          }}
        />
        <span className="slider round"></span>
      </label>
      <span style={{ fontSize: "0.8rem" }}>include past events</span>
    </div>
  );
};

export default ToggleRefinement;
