import React from "react";

const HubForm: React.FC = () => {
  return (
    <div className="hubfrom">
      <form>
        <div>
          <label>Hub IP</label>
          <input type="text" />
        </div>
        <div>
          <label>Hub Key</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default HubForm;
