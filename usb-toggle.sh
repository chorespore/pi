read -p 'on/off:' cmd
if [ $cmd = "on" ]
then
    echo on | sudo tee /sys/bus/usb/devices/5-1/power/control
elif [ $cmd = "off" ]
then 
    echo auto | sudo tee /sys/bus/usb/devices/5-1/power/control
fi
