import Wave from 'react-wavify';
import { WaveMainComposer } from '../../styles/purpleWaves';

export const Waves = () => {
    return (
        <WaveMainComposer>
            <div id="waves" className="waveOne">
                <Wave
                    fill="url(#gradient)"
                    options={{
                        height: 20,
                        amplitude: 20,
                        speed: 0.15,
                        points: 3,
                    }}
                >
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(90)">
                            <stop offset="70%" stopColor="rgba(125,2,221,.8)" />
                            <stop offset="100%" stopColor="rgba(79,0,255,.5)" />
                        </linearGradient>
                    </defs>
                </Wave>
            </div>
            <div id="waves" className="waveTwo">
                <Wave
                    fill="url(#gradient)"
                    options={{
                        height: 20,
                        amplitude: 40,
                        speed: 0.2,
                        points: 3,
                    }}
                >
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(0)">
                            <stop offset="100%" stopColor="rgba(125,2,221,5)" />
                            <stop offset="30%" stopColor="rgba(79,0,255,5)" />
                        </linearGradient>
                    </defs>
                </Wave>
            </div>
        </WaveMainComposer>
    );
};

export default Waves;
