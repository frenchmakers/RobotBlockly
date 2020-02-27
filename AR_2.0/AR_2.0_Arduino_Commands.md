# AR 2.0 Arduino - Commands

This document provide the commands supproted by the AR2 - Stepper motor robot control software Ver 2.2.0 for Arduino.

When the parameter is **float** the value is invariant/english formatted.

The returned value are a line text with line feed character.

## SV - MOVE SERVO

Format: `SV{NUM}P{POS}`
- `{NUM}` : (int) servo number
- `{POS}` : (int) position to move the servo

Returns `Done`.

## WT - WAIT TIME

Format: `WTS{SECONDS}`
- `{SECONDS}`: (float) number of seconds to pause

Returns `Done`.

## JF - IF INPUT THEN JUMP

Format: `JFX{INPUT}T{TAB}`
- `{INPUT}`: (int) number of the input to test
- `{TAB}`: #unused

Returns `T` if the input is ON (`HIGH`) else returns `F`.

## ON - SET OUTPUT ON

Format: `ONX{OUTPUT}`
- `{OUTPUT}`: (int) number of the output to set ON

Returns `Done`.

## WI - WAIT INPUT ON

Wait until an input is ON.

Format: `WIN{INPUT}`
- `{INPUT}`: (int) number of the input to test

Returns `Done`.

## WO - WAIT INPUT OFF

Wait until an input is OFF.

Format: `WON{INPUT}`
- `{INPUT}`: (int) number of the input to test

Returns `Done`.

## TM - ECHO A TEST MESSAGE

Format: `TM{MESSAGE}`
- `{MESSAGE}`: (string) message to echo

Returns `{MESSAGE}`.

## LL - CALIBRATE

Format: `LLA{J1D}{J1S}B{J2D}{J2S}C{J3D}{J3S}D{J4D}{J4S}E{J5D}{J5S}F{J6D}{J6S}S{SPEED}`
- `{J1D}`: (`0`|`1`) J1 calibration direction
- `{J1S}`: (int) J1 step
- `{J2D}`: (`0`|`1`) J2 calibration direction
- `{J2S}`: (int) J2 step
- `{J3D}`: (`0`|`1`) J3 calibration direction
- `{J3S}`: (int) J3 step
- `{J4D}`: (`0`|`1`) J4 calibration direction
- `{J4S}`: (int) J4 step
- `{J5D}`: (`0`|`1`) J5 calibration direction
- `{J5S}`: (int) J5 step
- `{J6D}`: (`0`|`1`) J6 calibration direction
- `{J6S}`: (int) J6 step
- `{SPEED}`: (float) speed

Returns `P` if the calibration succeed else returns `F` if failed.

## MJ - MOVE J

Format: `MJA{J1D}{J1S}B{J2D}{J2S}C{J3D}{J3S}D{J4D}{J4S}E{J5D}{J5S}F{J6D}{J6S}T{TRD}{TRS}S{SPEED}G{ACCD}H{ACCS}I{DCCD}K{DCCS}`
- `{J1D}`: (`0`|`1`) J1 direction
- `{J1S}`: (int) J1 step
- `{J2D}`: (`0`|`1`) J2 direction
- `{J2S}`: (int) J2 step
- `{J3D}`: (`0`|`1`) J3 direction
- `{J3S}`: (int) J3 step
- `{J4D}`: (`0`|`1`) J4 direction
- `{J4S}`: (int) J4 step
- `{J5D}`: (`0`|`1`) J5 direction
- `{J5S}`: (int) J5 step
- `{J6D}`: (`0`|`1`) J6 direction
- `{J6S}`: (int) J6 step
- `{TRD}`: (`0`|`1`) Track direction
- `{TRS}`: (int) Track step
- `{SPEED}`: (float) speed
- `{ACCD}`: (int) acceleration dur
- `{ACCS}`: (int) acceleration speed
- `{DCCD}`: (int) deceleration dur
- `{DCCS}`: (int) deceleration speed

Returns `command recieved` **before** executing the command.

## ML - MOVE L

This command is multilines. The first line is the command with the number of lines to read. Each following line contains a waypoint.

The command format: `ML{NUM}`
- `{NUM}`: (int) number of waypoints to read
returns `num points recieved`.

The waypoint format: `MJA{J1D}{J1S}B{J2D}{J2S}C{J3D}{J3S}D{J4D}{J4S}E{J5D}{J5S}F{J6D}{J6S}T{TRD}{TRS}S{SPEED}G{ACCD}H{ACCS}I{DCCD}K{DCCS}`
- `{J1D}`: (`0`|`1`) J1 direction
- `{J1S}`: (int) J1 step
- `{J2D}`: (`0`|`1`) J2 direction
- `{J2S}`: (int) J2 step
- `{J3D}`: (`0`|`1`) J3 direction
- `{J3S}`: (int) J3 step
- `{J4D}`: (`0`|`1`) J4 direction
- `{J4S}`: (int) J4 step
- `{J5D}`: (`0`|`1`) J5 direction
- `{J5S}`: (int) J5 step
- `{J6D}`: (`0`|`1`) J6 direction
- `{J6S}`: (int) J6 step
- `{TRD}`: (`0`|`1`) Track direction
- `{TRS}`: (int) Track step
- `{SPEED}`: (float) speed
- `{ACCD}`: (int) #unused
- `{ACCS}`: (int) #unused
- `{DCCD}`: (int) #unused
- `{DCCS}`: (int) #unused

Returns the number of waypoint starting `0`.

When all is read returns `waypts done`.

The waypoints are executed **after** the returns line.
