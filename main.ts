basic.forever(function () {
    music.play(music.stringPlayable("B - - - B - - - ", 120), music.PlaybackMode.LoopingInBackground)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
