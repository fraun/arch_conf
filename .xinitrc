


setxkbmap -layout gb
#xset +fp /usr/share/fonts/local
#xset fp rehash
#xbindkeys&
compton -cb --vsync opengl
#./.config/bspwm/panel &
xrdb -merge ~/.Xresources

insync start

#redshift &


#cwm

#exec x-focus-manager &
sxhkd &



rootwin=$(lsw -r)
#exec urxvt 
swm 




#exec bspwm
