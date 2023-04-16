import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connectToDevice } from "../../modules/ConnectUSB";

export const Home = () => {
  const [device, setDevice] = useState(null);

  useEffect(() => {
    const fetchDevice = async () => {
      const dev = await connectToDevice();
      setDevice(dev);
    };
    fetchDevice();
  }, []);

  if (!device) {
    return (
      <div className="home">
        홈 입니다. 첫 페이지
        <Link to="/hardware">하드웨어로이동</Link>
        <div> 아무거도 없다네용</div>
      </div>
    );
  } else {
    return (
      <div className="home">
        홈 입니다. 첫 페이지
        <Link to="/hardware">하드웨어로이동</Link>
        <div>연결됐다네용</div>
      </div>
    );
  }
};
