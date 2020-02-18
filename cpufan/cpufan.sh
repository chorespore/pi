#!/bin/sh

# enable the gpio 154 -> cpu fan
echo 154 > /sys/class/gpio/export

# set the direction to output
echo "out" > /sys/class/gpio/gpio154/direction

while true;
do
    raw=$(cat /sys/class/thermal/thermal_zone1/temp)
    temp=`expr $raw / 1000`
    # echo $temp
    if [ $temp -gt 60 ]
    then
        # echo on
        echo 1 > /sys/class/gpio/gpio154/value #fan on
    fi
    if [ $temp -lt 40 ]
    then
        # echo off
        echo 0 > /sys/class/gpio/gpio154/value #fan off
    fi
    sleep 5
done