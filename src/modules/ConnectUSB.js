const device_form = {
  veondorId: "",
  productId: "",
  serialNumber: "",
};

const saveConnectionInfo = (device) => {
  localStorage.setItem("usbDevice", JSON.stringify(device));
};

const getConnectionInfo = () => {
  const deviceString = localStorage.getItem("usbDevice");
  if (deviceString) {
    device_form = JSON.parse(deviceString);
    return {
      filters: [device_form],
    };
  }
  console.log("Any USB is stored.");
  return null;
};

const checkSupportUSB = () => {
  if ("usb" in navigator) {
    console.log("WebUSB is supported!");
    return true;
  } else {
    console.warn("WebUSB is not supported in this browser.");
    return false;
  }
};

export const connectToDevice = async () => {
  try {
    if (checkSupportUSB()) {
      // const filters = getConnectionInfo();
      // if (!filters) {
      const temp = await navigator.usb;
      console.warn(temp);
      const devices = await navigator.usb.getDevices();
      if (devices.length === 0) {
        console.error("No USB devices found..");
        return null;
      }
      devices.forEach(async (dev) => {
        console.log(dev);
        // await dev.open();
        // await dev.selectConfiguration(1);
        // await dev.claimInterface(0);
        // const endpointIn = dev.configuration.interfaces[0].endpoints[0];
        // const endpointOut = dev.configuration.interfaces[0].endpoints[1];
        // console.log(endpointIn, endpointOut);
      });
      // saveConnectionInfo(device);
      console.log(devices);
      return null;
      // }

      // const device = await navigator.usb.requestDevice({ filters });

      // await device.open();
      // await device.selectConfiguration(1);
      // await device.claimInterface(0);

      // saveConnectionInfo(device);

      // return device;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    console.error("Tlqkf");
    return null;
  }
};
