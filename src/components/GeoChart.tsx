import { ResponsiveChoropleth } from '@nivo/geo'
import { geoFeatures } from '@/data/mockGeoFeature'
import { Box } from '@mui/material'
import { useContext, useMemo } from 'react'
import { type ColorMode, ColorModeContext, tokens } from '@/theme'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const GeoChart = ({ data /* see data tab */, isDashboard = false }) => {
    const { themeMode } = useContext<ColorMode>(ColorModeContext)
    const colors = useMemo(() => tokens(themeMode), [themeMode])
    return (
        <Box className="h-full w-full" color={colors.primary[300]}>
            <ResponsiveChoropleth
                data={data}
                features={geoFeatures.features}
                theme={{
                    axis: {
                        domain: {
                            line: {
                                stroke: colors.primary[100],
                                strokeWidth: 2,
                            },
                        },
                        legend: {
                            text: {
                                fill: colors.primary[400],
                            },
                        },
                        ticks: {
                            line: {
                                stroke: colors.primary[100],
                                strokeWidth: 2,
                            },
                            text: {
                                fill: colors.primary[100],
                            },
                        },
                    },
                    legends: {
                        text: {
                            fill: colors.primary[200],
                        },
                        title: {
                            text: {
                                fill: colors.primary[200],
                            },
                        },
                    },
                    text: {
                        fill: colors.primary[100],
                    },
                }}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="nivo"
                domain={[0, 1000000]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionTranslation={[0.5, 0.5]}
                projectionScale={isDashboard ? 90 : 250}
                projectionRotation={[0, 0, 0]}
                enableGraticule={false}
                graticuleLineColor="#dddddd"
                borderWidth={1}
                borderColor="#152538"
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
                fill={[
                    {
                        match: {
                            id: 'CAN',
                        },
                        id: 'dots',
                    },
                    {
                        match: {
                            id: 'CHN',
                        },
                        id: 'lines',
                    },
                ]}
                legends={
                    isDashboard
                        ? []
                        : [
                              {
                                  anchor: 'bottom-left',
                                  direction: 'column',
                                  justify: true,
                                  translateX: 20,
                                  translateY: -100,
                                  itemsSpacing: 0,
                                  itemWidth: 94,
                                  itemHeight: 18,
                                  itemDirection: 'left-to-right',
                                  itemTextColor: colors.primary[100],
                                  itemOpacity: 0.85,
                                  symbolSize: 18,
                                  effects: [
                                      {
                                          on: 'hover',
                                          style: {
                                              itemTextColor: colors.greenAccent[400],
                                              itemOpacity: 1,
                                          },
                                      },
                                  ],
                              },
                          ]
                }
            />
        </Box>
    )
}

export default GeoChart
