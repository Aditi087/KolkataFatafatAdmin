import React from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { FiEdit, FiSearch } from 'react-icons/fi';
import { Modal } from 'react-bootstrap';
import { ThreeDots } from 'react-loader-spinner';
import profileImage from '../../assets/profile3.png';
import { GameResult, current_time } from './PageConstants';

export const LoaderERP = (props) => {
  return (
    <Modal
      show={true}
      size={'sm'}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modalContainer"
      contentClassName="modal-content-custom"
    >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#ffcf40"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          dispay: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        wrapperClassName=""
        visible={true}
      />
    </Modal>
  );
};

export const Heading = ({
  title,
  subtitle,
  edit,
  add,
  onClick,
  hideText,
  button,
  buttonTitle,
  path,
  date,
}) => {
  return (
    <div className="heading sticky-top d-flex justify-content-between">
      <div className="text-capitalize heading_txt my-auto">
        {title && <h6 className="my-auto">{title}</h6>}
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div>
        {date && <span style={{ fontSize: '14px' }}>{date}</span>}
        {edit && (
          <>
            <button className="ghost_btn onhover d-flex" onClick={onClick}>
              <FiEdit className="heading_icon" style={{ fontSize: '18px' }} />
            </button>
            <div className="hide bg-dark">{hideText}</div>
          </>
        )}
        {add && (
          <>
            <button className="ghost_btn onhover d-flex" onClick={onClick}>
              <MdOutlineAddCircleOutline
                className="heading_icon"
                style={{ fontSize: '18px' }}
              />
            </button>
            <div className="hide bg-dark">{hideText}</div>
          </>
        )}
        {button && (
          <>
            <Link to={path}>
              <button className="heading_btn">{buttonTitle}</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export const PageFooter = ({ text }) => {
  return (
    <div className="page_footer sticky-bottom">
      <span>{text}</span>
    </div>
  );
};

export const ButtonComponent = ({ text, submit }) => {
  return (
    <>
      <Button
        type="submit"
        className="page_button text-capitalize"
        onClick={submit}
      >
        {text}
      </Button>
    </>
  );
};

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export const SwitchButtonComponent = ({
  value,
  onChange,
  disabled,
  label,
  label1,
  label2,
}) => {
  return (
    <>
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} />}
        checked={value === 0 ? false : true}
        label={label && (value === 0 ? label1 : label2)}
        onChange={onChange}
        id="switch_comp"
        disabled={disabled}
      />
    </>
  );
};

export const TitleComponent = ({ text, size }) => {
  return (
    <div className="d-flex justify-content-between">
      <span
        className="title_Compnent"
        style={{ fontSize: size ? size : '14px' }}
      >
        {text}
      </span>
    </div>
  );
};
export const TextComponent = ({ text, center }) => {
  return (
    <div className={center && 'text-center'}>
      <span className="text_Compnent">{text}</span>
    </div>
  );
};
export const HeadingTextComponent = ({ text, center }) => {
  return (
    <div className={center && 'text-center'}>
      <span className="heading_text_Compnent">{text}</span>
    </div>
  );
};

export const AddIcon = ({ onClick, hover, hideText }) => {
  return (
    <>
      <button className="ghost_btn onhover" onClick={onClick}>
        <IoIosAddCircleOutline
          className={'add_icon ' + (hover && 'add_icon_hover')}
        />
      </button>
      <div className="hide">{hideText}</div>
    </>
  );
};

export const DropdownComponent = ({
  dropdownChange,
  dropdownData,
  filterName,
  dropdownvalue,
  white,
}) => {
  // console.log(dropdownChange);
  return (
    <div className="m-auto">
      <Form.Group className="px-2 d-flex">
        {/* {filterName && <Form.Label className="pe-1 m-auto">{filterName}</Form.Label>} */}
        {/* <FormControl
          sx={{
            minWidth: '100px',
            width: 'max-width',
          }}
          size="small"
        >
          <InputLabel
            id="demo-select-small-label"
            style={{ fontSize: '12px', color: white && 'white' }}
          >
            {filterName}
          </InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            style={{ fontSize: '12px', color: white && 'white' }}
            value={dropdownvalue}
            onChange={dropdownChange}
            label={''}
          >
            {dropdownData?.map((d, index) => (
              <MenuItem value={d.value} key={index}>
                {d.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}
        <Form.Select
          size="sm"
          aria-label="Default select example"
          value={dropdownvalue}
          onChange={dropdownChange}
          className={'select-component ' + (white && 'text-white')}
        >
          {filterName && (
            <option value="" className="text-dark">
              {filterName}
            </option>
          )}

          {dropdownData?.map((row, index) => {
            return (
              <option value={row?.value} key={index} className="text-dark">
                {row?.title}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
    </div>
  );
};

export const SearchField = (props) => {
  const { value, onChange, searchPlaceholder, white } = props;
  return (
    <div className="d-flex">
      <form className="search_box my-auto">
        <input
          className={'search_input ' + (white && 'text-white')}
          value={value}
          onChange={onChange}
          placeholder={searchPlaceholder}
        />
        <div className="searchIcon-container my-auto">
          <FiSearch className="search_icon" />
        </div>
      </form>
    </div>
  );
};

export const openFileDialog = () => {
  const fileData = new Promise((resolve, reject) => {
    let input = document.createElement('input');
    input.accept = 'image/jpeg, image/png, image/jpg';
    input.type = 'file';
    input.onchange = async (e) => {
      let file = e.target.files[0];
      // const base64Data = await toBase64(file);
      resolve({ file });
    };
    input.click();
  });

  return fileData;
};

export const ImagePicker = (props) => {
  const { image, setImage, disabled } = props;

  const RemoveImage = () => {
    setImage(null);
    // setImageView(null);
  };

  return (
    <>
      {image === null ? (
        <button
          className={'img_btn w-100 p-2 mx-2 ' + (disabled && 'disable_img')}
          onClick={async (event) => {
            event.preventDefault();
            let fileData = await openFileDialog();
            setImage(fileData.file);
          }}
          disabled={disabled}
        >
          Choose Image
        </button>
      ) : (
        <>
          <div className="d-flex w-100 mx-2">
            <button
              className="img_btn w-50 p-2 me-1"
              onClick={async (event) => {
                event.preventDefault();
                let fileData = await openFileDialog();
                setImage(fileData.file);
              }}
            >
              Change Image
            </button>
            <button className="img_btn w-50 p-2 ms-1" onClick={RemoveImage}>
              Remove Image
            </button>
          </div>
          <div className="d-flex m-2 ">
            <div
              style={
                {
                  // height: 'fit-content',
                }
              }
            >
              <img
                src={image?.name ? URL.createObjectURL(image) : image}
                alt=""
                style={{ maxHeight: '20rem', maxWidth: '30rem' }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const ProfileImagePicker = (props) => {
  const { image, setImage, disabled } = props;

  return (
    <>
      {image === null ? (
        <button
          className={'ghost_btn ' + (disabled && 'disable_img')}
          onClick={async (event) => {
            event.preventDefault();
            let fileData = await openFileDialog();
            setImage(fileData.file);
          }}
          disabled={disabled}
        >
          <img src={profileImage} alt="" className="profile_image" />
        </button>
      ) : (
        <>
          {/* <div className="d-flex w-100 mx-2"> */}
          <button
            className="ghost_btn"
            onClick={async (event) => {
              event.preventDefault();
              let fileData = await openFileDialog();
              setImage(fileData.file);
            }}
          >
            <img
              src={image?.name ? URL.createObjectURL(image) : image}
              alt=""
              className="profile_image"
            />
          </button>
        </>
      )}
    </>
  );
};

export const Label = ({ label, mandatory }) => {
  return (
    <div className="label_comp">
      <span>{label}</span>
      {mandatory && <span className="mandatory">*</span>}
    </div>
  );
};

export const time = (time) => {
  var h = time.split(':')[0],
    m = time.split(':')[1];
  var _time =
    h > 12
      ? h - 12 + ':' + m + ' PM'
      : h === 12
      ? h + ':' + m + ' PM'
      : h + ':' + m + ' AM';
  return _time;
};

// export const liveFunction = (index) => {
//   var curr_time;
//   for (let index = 0; index < array.length; index++) {
//     let live =

//   }
//   if (
//     index === 0 &&
//     current_time.split(':')[0] > GameResult[index - 1].time.split(':')[0]
//   ) {
//   }
//   if (
//     index > 0 &&
//     index < GameResult.length - 1 &&
//     current_time.split(':')[0] > GameResult[index - 1].time.split(':')[0]
//   ) {
//     //   var a = GameResult[index - 1].time.split(':')[0];
//     //   console.log(a);
//     // if (
//     //   current_time.split(':')[0] > result.split(':')[0]
//     //   // &&
//     //   // current_time < GameResult[index + 1].time
//     // ) {
//     curr_time = 'live';
//     // }
//   } else {
//     curr_time = 'result';
//   }
//   // index > 0 &&
//   //   index < GameResult.length - 1 &&
//   //   current_time > GameResult[index - 1].time &&
//   //   current_time < GameResult[index + 1].time;
//   return curr_time;
// };
