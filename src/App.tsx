import BestBiteApp from "./pages/bestbite-app";
import "@fontsource/chakra-petch";

function App() {
  return (
    <>
      
      {isUnsupportedDevice() && <div className="bg-red-500 p-48">Hey this is it! </div>}
      <BestBiteApp />
    </>
  );
}

export default App;


const checkOperatingSystem = () => {
  let operatingSystem = 'Unknown OS';
  //const isMac = navigator.userAgent.toLowerCase().includes('mac');
  //if (isMac) return
  if (navigator.userAgent) {
    const platformMatch = navigator.userAgent.match(/(Windows NT \d+\.\d+|Mac OS X \d+_\d+_\d+|Linux)/i);
    if (platformMatch) {
      operatingSystem = platformMatch[0];
      if (operatingSystem.startsWith('Windows NT')) {
        const versionMap: { [key: string]: string } = {
          '10.0': '10',
          '6.3': '8.1',
          '6.2': '8',
          '6.1': '7',
          '6.0': 'Vista',
          '5.2': 'Server 2003/XP x64',
          '5.1': 'XP',
          '5.0': '2000',
        };
        const version = operatingSystem.substring(11);
        operatingSystem = 'Windows ' + (versionMap[version] || version);
      } else if (operatingSystem.startsWith('Mac OS X')) {
        operatingSystem = operatingSystem.replace(/_/g, '.').replace('Mac OS X', 'MacOS');
      }
    }
  }
  console.log("OS:", operatingSystem)
  return operatingSystem;
};

const getDeviceType = () => {
  const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
  const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const tablet = /Tablet|iPad/i.test(userAgent);

  if (mobile) {
    return 'Mobile';
  } else if (tablet) {
    return 'Tablet';
  } else {
    return 'Computer';
  }
};

const isUnsupportedDevice = () => getDeviceType() === 'Mobile' || getDeviceType() === 'Tablet';
!checkOperatingSystem() || (checkOperatingSystem() && !checkOperatingSystem().includes('Windows'));
