export default function PrimezFitConnectAndroid() {
  const connectWatch = async () => {
    if (!navigator.bluetooth) {
      alert('Bluetooth is not supported on this Android device or browser.')
      return
    }

    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service'],
      })

      alert(`Connected to ${device.name || 'PrimezFit Watch'}`)
    } catch (error) {
      alert('Connection cancelled or failed.')
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      <div className="w-full max-w-md bg-black/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-6 text-white">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold tracking-wide">
            PrimezFit Connect
          </h1>
          <p className="text-zinc-300 mt-2">
            Smartwatch syncing app for Android
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl p-4 mb-5">
          <h2 className="text-lg font-semibold mb-4">Device Status</h2>

          <div className="flex justify-between mb-3">
            <span className="text-zinc-300">Bluetooth</span>
            <span className="text-green-400">Ready</span>
          </div>

          <div className="flex justify-between mb-3">
            <span className="text-zinc-300">Battery</span>
            <span>91%</span>
          </div>

          <div className="flex justify-between">
            <span className="text-zinc-300">Heart Rate</span>
            <span>76 BPM</span>
          </div>
        </div>

        <button
          onClick={connectWatch}
          className="w-full bg-white text-black font-bold py-4 rounded-2xl hover:scale-105 transition-transform"
        >
          Connect Smartwatch
        </button>

        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="bg-white/10 rounded-2xl p-4 text-center">
            <p className="text-zinc-300 text-sm">Steps</p>
            <p className="text-2xl font-bold mt-1">9,842</p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 text-center">
            <p className="text-zinc-300 text-sm">Sleep</p>
            <p className="text-2xl font-bold mt-1">8.1h</p>
          </div>
        </div>

        <div className="mt-6 bg-white/10 rounded-2xl p-4 text-center">
          <p className="text-zinc-300 text-sm">Connected Device</p>
          <p className="text-lg font-semibold mt-1">
            PrimezFit Watch Series
          </p>
        </div>
      </div>
    </div>
  )
}