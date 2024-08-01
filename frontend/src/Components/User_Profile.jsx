import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Feb", uv: 186, pv: 2400, amt: 2400 },
  { name: "Apr", uv: 73, pv: 4567, amt: 2400 },
  { name: "Jun", uv: 200, pv: 1398, amt: 2400 }
];
const data2 = [
    { name: "Feb", uv: 12, pv: 2400, amt: 2400 },
    { name: "Apr", uv: 252, pv: 4567, amt: 2400 },
    { name: "Jun", uv: 73, pv: 1398, amt: 2400 }
  ];

const User_Profile = () => {
  return (
    <div>
      <div className="w-full max-w-5xl mx-auto py-12 md:py-16 lg:py-20 h-screen">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="col-span-1 md:col-span-1">
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg"
              data-v0-t="card"
            >
              <div className="relative h-40 md:h-60">
                {/* <img
            src="/placeholder.svg"
            alt="Cover image"
            width="800"
            height="320"
            className="w-full h-full object-cover rounded-t-lg"
            style="aspect-ratio: 800 / 320; object-fit: cover;"
          /> */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 rounded-t-lg">
                  <div className="flex items-center gap-4">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ring-4 ring-background">
                      <img
                        className="aspect-square h-full w-full"
                        src="/placeholder-user.jpg"
                      />
                    </span>
                    <div className="text-white">
                      <h3 className="text-lg font-medium">John Doe</h3>
                      <p className="text-sm text-muted-foreground">@johndoe</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid gap-2">
                  <h4 className="text-lg font-medium">About</h4>
                  <p className="text-muted-foreground">
                    Im a passionate web developer with a strong interest in
                    building user-friendly and scalable applications.
                  </p>
                </div>
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 bg-border h-[1px] w-full"
                />
                <div className="grid gap-2">
                  <h4 className="text-lg font-medium">Joined</h4>
                  <p className="text-muted-foreground">June 2021</p>
                </div>
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 bg-border h-[1px] w-full"
                />
                <div className="grid gap-2">
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-2 grid gap-8">
            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Activity
                </h3>
              </div>
              <div className="p-6 grid grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <h4 className="text-4xl font-bold">120</h4>
                  <p className="text-muted-foreground">Questions Asked</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-4xl font-bold">85</h4>
                  <p className="text-muted-foreground">Questions Answered</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-4xl font-bold">250</h4>
                  <p className="text-muted-foreground">Questions Liked</p>
                </div>
              </div>
            </div>

            {/* <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Milestones</h3>
        </div>
        <div className="p-6 grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-center">
              <div className="w-32 h-32">
                <div
                  className="flex aspect-video justify-center text-xs [&amp;_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&amp;_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&amp;_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&amp;_.recharts-dot[stroke='#fff']]:stroke-transparent [&amp;_.recharts-layer]:outline-none [&amp;_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&amp;_.recharts-radial-bar-background-sector]:fill-muted [&amp;_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&amp;_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&amp;_.recharts-sector[stroke='#fff']]:stroke-transparent [&amp;_.recharts-sector]:outline-none [&amp;_.recharts-surface]:outline-none"
                  data-chart="chart-r7"
                >
                  <div className="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;">
                    <div
                      className="recharts-wrapper"
                      style="position: relative; cursor: default; width: 100%; height: 100%; max-height: 72px; max-width: 128px;"
                    >
                      <svg
                        tabIndex="0"
                        role="application"
                        className="recharts-surface"
                        width="128"
                        height="72"
                        viewBox="0 0 128 72"
                        style="width: 100%; height: 100%;"
                      >
                        <title></title>
                        <desc></desc>
                        <defs>
                          <clipPath id="recharts16-clip">
                            <rect x="12" y="0" height="42" width="104"></rect>
                          </clipPath>
                        </defs>
                        <g className="recharts-cartesian-grid">
                          <g className="recharts-cartesian-grid-horizontal">
                            <line
                              stroke="#ccc"
                              fill="none"
                              x="12"
                              y="0"
                              width="104"
                              height="42"
                              x1="12"
                              y1="42"
                              x2="116"
                              y2="42"
                            ></line>
                            <line
                              stroke="#ccc"
                              fill="none"
                              x="12"
                              y="0"
                              width="104"
                              height="42"
                              x1="12"
                              y1="0"
                              x2="116"
                              y2="0"
                            ></line>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                          <g className="recharts-cartesian-axis-ticks">
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                orientation="bottom"
                                width="104"
                                height="30"
                                stroke="none"
                                x="32.8"
                                y="56"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="middle"
                                fill="#666"
                              >
                                <tspan x="32.8" dy="0.71em">
                                  Feb
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                orientation="bottom"
                                width="104"
                                height="30"
                                stroke="none"
                                x="74.4"
                                y="56"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="middle"
                                fill="#666"
                              >
                                <tspan x="74.4" dy="0.71em">
                                  Apr
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                orientation="bottom"
                                width="104"
                                height="30"
                                stroke="none"
                                x="116"
                                y="56"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="middle"
                                fill="#666"
                              >
                                <tspan x="116" dy="0.71em">
                                  Jun
                                </tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-line">
                          <path
                            stroke="var(--color-desktop)"
                            strokeWidth="2"
                            fill="none"
                            width="104"
                            height="42"
                            className="recharts-curve recharts-line-curve"
                            d="M12,16.998C18.745,10.408,25.491,3.818,32.236,1.903C38.982,-0.013,45.727,2.745,52.473,10.528C59.218,18.311,65.964,31.119,72.709,31.331C79.455,31.543,86.2,19.16,92.946,14.08C99.691,9,106.437,11.223,113.182,13.446"
                          ></path>
                        </g>
                      </svg>
                      <div
                        tabIndex="-1"
                        className="recharts-tooltip-wrapper"
                        style="visibility: hidden; pointer-events: none; position: absolute; top: 0px; left: 0px;"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">Badges Earned</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-center">
              <div className="w-32 h-32">
                <div
                  className="flex aspect-video justify-center text-xs [&amp;_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&amp;_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&amp;_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&amp;_.recharts-dot[stroke='#fff']]:stroke-transparent [&amp;_.recharts-layer]:outline-none [&amp;_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&amp;_.recharts-radial-bar-background-sector]:fill-muted [&amp;_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&amp;_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&amp;_.recharts-sector[stroke='#fff']]:stroke-transparent [&amp;_.recharts-sector]:outline-none [&amp;_.recharts-surface]:outline-none"
                  data-chart="chart-r8"
                >
                  <div className="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;">
                    <div
                      className="recharts-wrapper"
                      style="position: relative; cursor: default; width: 100%; height: 100%; max-height: 72px; max-width: 128px;"
                    >
                      <svg
                        tabIndex="0"
                        role="application"
                        className="recharts-surface"
                        width="128"
                        height="72"
                        viewBox="0 0 128 72"
                        style="width: 100%; height: 100%;"
                      >
                        <title></title>
                        <desc></desc>
                        <defs>
                          <clipPath id="recharts19-clip">
                            <rect x="12" y="0" height="42" width="104"></rect>
                          </clipPath>
                        </defs>
                        <g className="recharts-cartesian-grid">
                          <g className="recharts-cartesian-grid-horizontal">
                            <line
                              stroke="#ccc"
                              fill="none"
                              x="12"
                              y="0"
                              width="104"
                              height="42"
                              x1="12"
                              y1="42"
                              x2="116"
                              y2="42"
                            ></line>
                            <line
                              stroke="#ccc"
                              fill="none"
                              x="12"
                              y="0"
                              width="104"
                              height="42"
                              x1="12"
                              y1="0"
                              x2="116"
                              y2="0"
                            ></line>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                          <g className="recharts-cartesian-axis-ticks">
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                orientation="bottom"
                                width="104"
                                height="30"
                                stroke="none"
                                x="32.8"
                                y="56"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="middle"
                                fill="#666"
                              >
                                <tspan x="32.8" dy="0.71em">
                                  Feb
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                orientation="bottom"
                                width="104"
                                height="30"
                                stroke="none"
                                x="74.4"
                                y="56"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="middle"
                                fill="#666"
                              >
                                <tspan x="74.4" dy="0.71em">
                                  Apr
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <text
                                orientation="bottom"
                                width="104"
                                height="30"
                                stroke="none"
                                x="116"
                                y="56"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="middle"
                                fill="#666"
                              >
                                <tspan x="116" dy="0.71em">
                                  Jun
                                </tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-line">
                          <path
                            stroke="var(--color-desktop)"
                            strokeWidth="2"
                            fill="none"
                            width="104"
                            height="42"
                            className="recharts-curve recharts-line-curve"
                            d="M12,16.998C18.745,10.408,25.491,3.818,32.236,1.903C38.982,-0.013,45.727,2.745,52.473,10.528C59.218,18.311,65.964,31.119,72.709,31.331C79.455,31.543,86.2,19.16,92.946,14.08C99.691,9,106.437,11.223,113.182,13.446"
                          ></path>
                        </g>
                      </svg>
                      <div
                        tabIndex="-1"
                        className="recharts-tooltip-wrapper"
                        style="visibility: hidden; pointer-events: none; position: absolute; top: 0px; left: 0px;"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">Levels Reached</p>
          </div>
        </div>
      </div>  */}

            <div
              className="rounded-lg bg-card text-card-foreground border-0 shadow-lg"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Milestones
                </h3>
              </div>
              <div className="p-6 grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <div className="w-32 h-32">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <Tooltip />
                          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Badges Earned</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <div className="w-32 h-32">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data2}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <Tooltip />
                          <Line type="monotone" dataKey="uv" stroke="black" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Levels Reached</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Profile;
