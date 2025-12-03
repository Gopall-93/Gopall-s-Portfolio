import { WindowControls } from "@components";
import WindowWrapper from "@components/hoc/WindowWrapper";
import useWindowStore from "@store/windows";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;
  if (!data) return null;
  const { name, imageUrl } = data;
  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-5 space-y-6 bg-white">
        {
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-auto rounded-2xl"
          />
        }
      </div>
    </>
  );
};

const imageWindow = WindowWrapper(Image, "imgfile");
export default imageWindow;
