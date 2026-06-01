import LoopIcon from "@mui/icons-material/Loop";
import "./Loading.styles.scss";

const Loading = () => (
  <div className="loading_loop">
    <LoopIcon sx={{ height: 50, width: 50 }} className="loading_loop__icon" />
  </div>
);

export default Loading;
