import background from "../../img/ai-generated-8507588_640.jpg";
function InfoPanel() {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="col-lg-6">
      <div className="info d-flex justify-content-center flex-column p-6 h-101">
        <div className="py-5">
          {"          "}
          <h1
            className="display-6 fw-bold"
            style={{ paddingLeft: 183, paddingTop: 150 }}
          >
            DrankIO
          </h1>
        </div>
      </div>
    </div>
  );
}

export default InfoPanel;
