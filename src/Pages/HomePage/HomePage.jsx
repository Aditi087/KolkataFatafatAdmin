import React from 'react';
import './home.css';
import { FaDownload } from 'react-icons/fa';
import bf from '../../assets/image 1.png';
import { Link } from 'react-router-dom';
import ResultTable from '../../CommonComponents/table/ResultTable';
import {
  GameResult,
  LuckyMumbaiResult,
  logo,
} from '../../CommonComponents/pageComponents/PageConstants';
import { Grid } from '@mui/material';

export const HomePage = () => {
  return (
    <div className="home_body">
      <div className="home_nav sticky-top px-4">
        <img src={logo} className="home_logo my-auto" />

        <Link to="/login" className=" my-auto me-5">
          <button className="ghost_btn admin_log_btn m-auto">
            Admin Login
          </button>
        </Link>
      </div>
      <div className="home_content container py-5 d-flex flex-column">
        <div>
          <img src={bf} alt="" className="home_img" />
        </div>
        <div className="mt-5">
          <h6>Download Kolkata Fatafat APK</h6>
          <button className="ghost_btn download_btn">
            <FaDownload className="my-auto" />
          </button>
        </div>
        <div className="home_result">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <div className="mt-3">
                <ResultTable
                  tableName={'Kolkata Fatafat'}
                  GameResult={GameResult}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div className="mt-3">
                <ResultTable
                  tableName={'(N) Bengal Fatafat'}
                  GameResult={GameResult}
                />
              </div>
            </Grid>
          </Grid>
          <div className="mt-4">
            <ResultTable
              tableName={'Lucky Mumbai'}
              GameResult={LuckyMumbaiResult}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
