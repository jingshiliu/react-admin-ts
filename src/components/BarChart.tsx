import { ColorMode, ColorModeContext, tokens } from '@/theme'
import { Box } from '@mui/material'
import { ResponsiveBar } from '@nivo/bar'
import { useContext } from 'react'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const BarChart = ({ data /* see data tab */, showLegends = true }) => {
    const { themeMode } = useContext<ColorMode>(ColorModeContext)
    const colors = tokens(themeMode)

    return (
        <Box className="h-full w-full" color={colors.primary[400]}>
            <ResponsiveBar
                data={data}
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
                            fill: colors.primary[100],
                        },
                    },
                }}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut',
                ]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.25}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
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
                            id: 'fries',
                        },
                        id: 'dots',
                    },
                    {
                        match: {
                            id: 'sandwich',
                        },
                        id: 'lines',
                    },
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [['darker', 1.6]],
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32,
                    truncateTickAt: 0,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40,
                    truncateTickAt: 0,
                }}
                labelSkipWidth={12}
                labelSkipHeight={36}
                labelTextColor={{
                    from: 'color',
                    modifiers: [['darker', 1.6]],
                }}
                legends={
                    !showLegends
                        ? []
                        : [
                              {
                                  dataFrom: 'keys',
                                  anchor: 'bottom-right',
                                  direction: 'column',
                                  justify: false,
                                  translateX: 120,
                                  translateY: 0,
                                  itemsSpacing: 2,
                                  itemWidth: 100,
                                  itemHeight: 20,
                                  itemDirection: 'left-to-right',
                                  itemOpacity: 0.85,
                                  symbolSize: 20,
                                  effects: [
                                      {
                                          on: 'hover',
                                          style: {
                                              itemOpacity: 1,
                                          },
                                      },
                                  ],
                              },
                          ]
                }
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={(e) =>
                    e.id +
                    ': ' +
                    e.formattedValue +
                    ' in country: ' +
                    e.indexValue
                }
            />
        </Box>
    )
}

export default BarChart
