import Sidebar from '../../../components/SideBarD'
import Header from '../../../components/Header'
import React, { Component, lazy } from 'react'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import GetRestObject from '../../../api/ConnectServerGet'
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const WidgetsDropdownc = lazy(() => import('../../components/widgets/WidgetsDropdownc'))
const WidgetsBrand = lazy(() => import('../../components/widgets/WidgetsBrand'))

function sortByMonthName(monthNames, isReverse = false) {
  const referenceMonthNames = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ]
  const directionFactor = isReverse ? -1 : 1
  const comparator = (a, b) => {
    if (!a && !b) return 0
    if (!a && b) return -1 * directionFactor
    if (a && !b) return 1 * directionFactor

    const comparableA = a.toLowerCase().substring(0, 3)
    const comparableB = b.toLowerCase().substring(0, 3)
    const comparisonResult =
      referenceMonthNames.indexOf(comparableA) - referenceMonthNames.indexOf(comparableB)
    return comparisonResult * directionFactor
  }
  const safeCopyMonthNames = [...monthNames]
  safeCopyMonthNames.sort(comparator)
  return safeCopyMonthNames
}

class dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resultDB: [],
      coPartial: [],
      chPartial: [],
      noPartial: [],
      coePartial: [],
      coTotal: 0,
      chTotal: 0,
      noTotal: 0,
      coeTotal: 0,
      months: [],
      stationarySumRender: 0,
      mobileSumRender: 0,
      energySumRender: 0,
      totalSumRender: 0,
    }
  }

  GetRequestedDetails = () => {
    GetRestObject.GetRestRequest(`/api/reports`, (getResultObj) => {
      //coPartial = this.state.coPartial
      var data = [
        ['June', 60],
        ['February', 17],
        ['January', 30],
        ['March', 40],
        ['April', 40],
        ['May', 50],
      ]

      var monthNames = {
        January: 1,
        February: 2,
        March: 3,
        April: 4,
        May: 5,
        June: 6,
        July: 7,
        August: 8,
        September: 9,
        October: 10,
        November: 11,
        December: 12,
      }
      // object which holds the order value of the month

      // sort the data array
      data.sort(function (a, b) {
        // sort based on the value in the monthNames object
        return monthNames[a[0]] - monthNames[b[0]]
      })

      console.log('arreglo: ', data)

      let co2Total = 0
      let ch4Total = 0
      let no2Total = 0
      let co2eTotal = 0
      let co2Array = []
      let ch4Array = []
      let no2Array = []
      let co2eArray = []
      let time = []
      let co2eJanuarySum = 0
      let co2eFebruarySum = 0
      let co2eMarchSum = 0
      let co2eAprilSum = 0
      let co2eMaySum = 0
      let co2eJuneSum = 0
      let co2eJulySum = 0
      let co2eAugustSum = 0
      let co2eSeptemberSum = 0
      let co2eOctoberSum = 0
      let co2eNovemberSum = 0
      let co2eDecemberSum = 0
      let stationarySum = 0
      let mobileSum = 0
      let energySum = 0
      let totalSum = 0
      for (var key in getResultObj) {
        co2Total = getResultObj[key].data.co2 + co2Total
        ch4Total = getResultObj[key].data.ch4 + ch4Total
        no2Total = getResultObj[key].data.n2o + no2Total
        co2eTotal = getResultObj[key].data.co2e + co2eTotal
        time.push(getResultObj[key].data.time)
        if (getResultObj[key].data.combustion.stationary == true) {
          stationarySum = getResultObj[key].data.co2e + stationarySum
        }
        if (getResultObj[key].data.combustion.mobile == true) {
          mobileSum = getResultObj[key].data.co2e + mobileSum
        }
        if (getResultObj[key].data.energy == true) {
          energySum = getResultObj[key].data.co2e + energySum
        }
        if (getResultObj[key].data.time == 'January') {
          co2eJanuarySum = getResultObj[key].data.co2e + co2eJanuarySum
        }
        if (getResultObj[key].data.time == 'February') {
          co2eFebruarySum = getResultObj[key].data.co2e + co2eFebruarySum
        }
        if (getResultObj[key].data.time == 'March') {
          co2eMarchSum = getResultObj[key].data.co2e + co2eMarchSum
        }
        if (getResultObj[key].data.time == 'April') {
          co2eAprilSum = getResultObj[key].data.co2e + co2eAprilSum
        }
        if (getResultObj[key].data.time == 'May') {
          co2eMaySum = getResultObj[key].data.co2e + co2eMaySum
        }
        if (getResultObj[key].data.time == 'June') {
          co2eJuneSum = getResultObj[key].data.co2e + co2eJuneSum
        }
        if (getResultObj[key].data.time == 'July') {
          co2eJulySum = getResultObj[key].data.co2e + co2eJulySum
        }
        if (getResultObj[key].data.time == 'August') {
          co2eAugustSum = getResultObj[key].data.co2e + co2eAugustSum
        }
        if (getResultObj[key].data.time == 'September') {
          co2eSeptemberSum = getResultObj[key].data.co2e + co2eSeptemberSum
        }
        if (getResultObj[key].data.time == 'October') {
          co2eOctoberSum = getResultObj[key].data.co2e + co2eOctoberSum
        }
        if (getResultObj[key].data.time == 'November') {
          co2eNovemberSum = getResultObj[key].data.co2e + co2eNovemberSum
        }
        if (getResultObj[key].data.time == 'December') {
          co2eDecemberSum = getResultObj[key].data.co2e
        }
        co2Array.push(getResultObj[key].data.co2)
        ch4Array.push(getResultObj[key].data.ch4)
        no2Array.push(getResultObj[key].data.no2)
        //co2eArray.push(getResultObj[key].data.co2e)
      }
      if (co2eJanuarySum > 0) {
        co2eArray.push(co2eJanuarySum)
      }
      if (co2eFebruarySum > 0) {
        co2eArray.push(co2eFebruarySum)
      }
      if (co2eMarchSum > 0) {
        co2eArray.push(co2eMarchSum)
      }
      if (co2eAprilSum > 0) {
        co2eArray.push(co2eAprilSum)
      }
      if (co2eMaySum > 0) {
        co2eArray.push(co2eMaySum)
      }
      if (co2eJuneSum > 0) {
        co2eArray.push(co2eJuneSum)
      }
      if (co2eJulySum > 0) {
        co2eArray.push(co2eJulySum)
      }
      if (co2eAugustSum > 0) {
        co2eArray.push(co2eAugustSum)
      }
      if (co2eSeptemberSum > 0) {
        co2eArray.push(co2eSeptemberSum)
      }
      if (co2eOctoberSum > 0) {
        co2eArray.push(co2eOctoberSum)
      }
      if (co2eNovemberSum > 0) {
        co2eArray.push(co2eNovemberSum)
      }
      if (co2eDecemberSum > 0) {
        co2eArray.push(co2eDecemberSum)
      }
      totalSum = stationarySum + mobileSum + energySum
      console.log(time)
      console.log(co2eArray)
      console.log('suma de vectores', stationarySum)
      console.log(mobileSum)
      console.log(energySum)
      console.log(totalSum)
      const months = time.filter((valor, indice) => {
        return time.indexOf(valor) === indice
      })
      console.log(months)
      // sort the data array
      const test3 = sortByMonthName(months)
      console.log(test3)
      //console.log(months)
      console.log(getResultObj)
      console.log(getResultObj[0].data.co2)
      this.setState({
        coTotal: co2Total,
        chTotal: ch4Total,
        noTotal: no2Total,
        coeTotal: co2eTotal,
        coePartial: co2eArray,
        coPartial: co2Array,
        chPartial: ch4Array,
        noPartial: no2Array,
        resultDB: getResultObj,
        months: test3,
        stationarySumRender: stationarySum / 100,
        mobileSumRender: mobileSum,
        energySumRender: energySum,
        totalSumRender: totalSum,
      })
      //console.log('suma de vectores despues', stationarySumRender)
      //console.log(mobileSumRender)
      //console.log(energySumRender)
      //console.log(coPartial)
    })
  }
  componentDidMount = () => {
    this.GetRequestedDetails()
    //this.PostRequestedDetails()
  }

  render() {
    return (
      <>
        <div>
          <Sidebar />
          <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <Header />

            <CCard className="mb-4">
              <CCardBody>
                <CRow>
                  <CCol sm="5">
                    <h4 id="traffic" className="card-title mb-0">
                      Emissions
                    </h4>
                    <div className="small text-medium-emphasis">Year 2021</div>
                  </CCol>
                  <CCol sm="7" className="d-none d-md-block">
                    <CButton color="primary" className="float-end">
                      <CIcon name="cil-cloud-download" />
                    </CButton>
                    <CButtonGroup className="float-end me-3">
                      {['Day', 'Month', 'Year'].map((value) => (
                        <CButton
                          color="outline-secondary"
                          key={value}
                          className="mx-0"
                          active={value === 'Month'}
                        >
                          {value}
                        </CButton>
                      ))}
                    </CButtonGroup>
                  </CCol>
                </CRow>
                <CChartLine
                  style={{ height: '300px', marginTop: '40px' }}
                  data={{
                    //labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    labels: this.state.months,
                    datasets: [
                      {
                        label: 'co2e',
                        backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                        borderColor: getStyle('--cui-info'),
                        pointHoverBackgroundColor: getStyle('--cui-info'),
                        borderWidth: 2,
                        data: this.state.coePartial,
                        fill: true,
                      },
                      {
                        label: 'ch4',
                        backgroundColor: 'transparent',
                        borderColor: getStyle('--cui-success'),
                        pointHoverBackgroundColor: getStyle('--cui-success'),
                        borderWidth: 2,
                        data: [],
                      },
                      {
                        label: 'n2o',
                        backgroundColor: 'transparent',
                        borderColor: getStyle('--cui-danger'),
                        pointHoverBackgroundColor: getStyle('--cui-danger'),
                        borderWidth: 1,
                        borderDash: [8, 5],
                        data: [],
                      },
                    ],
                  }}
                  options={{
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      x: {
                        grid: {
                          drawOnChartArea: false,
                        },
                      },
                      y: {
                        ticks: {
                          beginAtZero: true,
                          maxTicksLimit: 5,
                          stepSize: Math.ceil(250 / 5),
                          max: 250,
                        },
                      },
                    },
                    elements: {
                      line: {
                        tension: 0.4,
                      },
                      point: {
                        radius: 0,
                        hitRadius: 10,
                        hoverRadius: 4,
                        hoverBorderWidth: 3,
                      },
                    },
                  }}
                />
              </CCardBody>
              <CCardFooter>
                <CRow className="text-center">
                  <CCol md sm="12" className="mb-sm-2 mb-0">
                    <div className="text-medium-emphasis">Scope 1</div>
                    <strong>Stationary</strong>
                    <CProgress
                      thin
                      className="mt-2"
                      precision={1}
                      color="success"
                      value={this.state.stationarySumRender}
                    />
                  </CCol>
                  <CCol md sm="12" className="mb-sm-2 mb-0">
                    <div className="text-medium-emphasis">Scope 1</div>
                    <strong>Mobile</strong>
                    <CProgress
                      thin
                      className="mt-2"
                      precision={1}
                      color="info"
                      value={this.state.mobileSumRender}
                    />
                  </CCol>
                  <CCol md sm="12" className="mb-sm-2 mb-0">
                    <div className="text-medium-emphasis">Scope 2</div>
                    <strong>Purchased energy</strong>
                    <CProgress
                      thin
                      className="mt-2"
                      precision={1}
                      color="warning"
                      value={this.state.energySumRender}
                    />
                  </CCol>
                  <CCol md sm="12" className="mb-sm-2 mb-0">
                    <div className="text-medium-emphasis">Total</div>
                    <strong>Emissions</strong>
                    <CProgress
                      thin
                      className="mt-2"
                      precision={1}
                      color="danger"
                      value={this.state.totalSumRender}
                    />
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </div>
        </div>
      </>
    )
  }
}
export default dashboard
