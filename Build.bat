ionic build android --prod --release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks D:\TUGAS\socif\belitung-information-center\platforms\android\build\outputs\apk\android-release-unsigned.apk my-alias
zipalign -v 4 D:\TUGAS\socif\belitung-information-center\platforms\android\build\outputs\apk\android-release-unsigned.apk Belitung-Information-Center.apk
apksigner verify Belitung-Information-Center.apk