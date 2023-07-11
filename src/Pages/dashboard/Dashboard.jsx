import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';
import { BsFillCircleFill } from 'react-icons/bs';
import { TbPigMoney } from 'react-icons/tb';
import { GiTakeMyMoney } from 'react-icons/gi';
import './style.css';
import Clock from '../../CommonComponents/clock/Clock';
import TableList from '../../CommonComponents/table/TableList';
import { TitleComponent } from '../../CommonComponents/pageComponents/PageComponents';
import {
  GameResult,
  LuckyMumbaiResult,
  TopBidBF,
  TopBidKF,
} from '../../CommonComponents/pageComponents/PageConstants';
import ResultTable from '../../CommonComponents/table/ResultTable';

function Dashboard() {
  useEffect(() => {
    localStorage.setItem('om1', 'Dashboard');
    localStorage.removeItem('om2');
    localStorage.removeItem('om3');
  }, []);

  const columns = [
    {
      name: 'Bid Amount (INR)',
      selector: (row) => (row?.amount ? row?.amount : '--'),
      sortable: true,
    },
    {
      name: 'Bet For',
      selector: (row) => (row?.bet_for ? row?.bet_for : '--'),
      sortable: true,
      center: true,
    },
    {
      name: 'Player Name',
      selector: (row) => (row?.player_name ? row?.player_name : '--'),
      sortable: true,
      right: true,
    },
  ];

  return (
    <div className="dash_body">
      <Grid container spacing={3}>
        <Grid item xs={12} md={7} lg={7}>
          {/* ----------------------------------- 1st line ----------------------- */}
          <div className="px-4 py-2">
            <Grid container spacing={5}>
              <Grid item xs={12} md={6} lg={6}>
                <div className="widget_box box1">
                  <div className="d-flex flex-column my-auto">
                    <span className="widget_value">10k +</span>
                    <span className="widget_text">Users</span>
                  </div>
                  <div className="my-auto">
                    <FaUsers className="widget_icons" />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Clock />
              </Grid>
            </Grid>
          </div>

          {/* ----------------------------------- 2nd line ------------------------ */}
          <div className="px-4 py-2">
            <Grid container spacing={5}>
              <Grid item xs={12} md={6} lg={6}>
                <div className="widget_box box3">
                  <div className="d-flex flex-column my-auto">
                    <span className="widget_value">Rs. 5k+</span>
                    <span className="widget_text">Heighest Winning amount</span>
                    <span className="widget_text">
                      Win by XYZ on 22.04.2023
                    </span>
                  </div>
                  <div className="my-auto">
                    <GiTakeMyMoney className="widget_icons" />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <div className="widget_box box2">
                  <div className="d-flex flex-column my-auto">
                    <span className="widget_value">Rs. 10k</span>
                    <span className="widget_text">Highest Bidding Amount</span>
                    <span className="widget_text mt-1">
                      Bid by ABCD on 01.03.2023
                    </span>
                  </div>
                  <div className="my-auto">
                    <TbPigMoney className="widget_icons" />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>

          {/* ----------------------------------- 3rd line ------------------------ */}
          <div className="px-4 py-2">
            <div className="dash_table">
              <div>
                <div className="d-flex justify-content-between">
                  <TitleComponent text={'Top 3 Bids ((N) Bengal Fatafat)'} />
                  <div className="d-flex">
                    <span style={{ fontSize: '12px' }} className="my-auto me-1">
                      Live
                    </span>
                    <BsFillCircleFill
                      style={{ color: '#40de10', fontSize: '10px' }}
                      className="my-auto"
                    />
                  </div>
                </div>

                <div className="mt-2">
                  <TableList columns={columns} data={TopBidKF} />
                </div>
              </div>
              <div className="mt-2">
                <div className="d-flex justify-content-between">
                  <TitleComponent text={'Top 3 Bids (Kolkata Fatafat)'} />
                  <div className="d-flex">
                    <span style={{ fontSize: '12px' }} className="my-auto me-1">
                      Live
                    </span>
                    <BsFillCircleFill
                      style={{ color: '#40de10', fontSize: '10px' }}
                      className="my-auto"
                    />
                  </div>
                </div>

                <div className="mt-2">
                  <TableList columns={columns} data={TopBidBF} />
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <div className="right_section mt-2 pe-3">
            {/* <Clock /> */}
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <div className="dash_result_list">
                  <ResultTable
                    tableName={'Kolkata Fatafat'}
                    GameResult={GameResult}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <div className="dash_result_list">
                  <ResultTable
                    tableName={'(N) Bengal Fatafat'}
                    GameResult={GameResult}
                  />
                </div>
              </Grid>
            </Grid>
            <div className="dash_result_list mt-3 mb-5">
              <ResultTable
                tableName={'Lucky Mumbai'}
                GameResult={LuckyMumbaiResult}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
