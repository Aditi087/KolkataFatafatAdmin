import logoImg from '../../assets/LOGO.png';

export const GameResult = [
  { time: '10:00 AM', single_dig: '3', Patti: '111', status: 'finished' },
  { time: '10:30 AM', single_dig: '6', Patti: '259', status: 'finished' },
  { time: '11:00 AM', single_dig: '3', Patti: '355', status: 'finished' },
  { time: '11:30 AM', single_dig: '5', Patti: '447', status: 'finished' },
  { time: '12:00 PM', single_dig: '3', Patti: '490', status: 'live' },
  { time: '12:30 PM', single_dig: '0', Patti: '145', status: 'upcoming' },
  { time: '01:00 PM', single_dig: '5', Patti: '267', status: 'upcoming' },
  { time: '01:30 PM', single_dig: '9', Patti: '108', status: 'upcoming' },
];

export const LuckyMumbaiResult = [
  { time: '10:30 PM', single_dig: '9', Patti: '999', status: 'upcoming' },
  { time: '12:00 AM', single_dig: '5', Patti: '258', status: 'upcoming' },
];

export const Transaction = [
  {
    player_name: 'ABC',
    bet_for: '3',
    type: 'Single Digit',
    amount: '100',
    game: '(N) Bengal Fatafat',
    tr_type: 'Credit',
    status: 0,
  },
  {
    player_name: 'BCD',
    bet_for: '477',
    type: 'Patti',
    amount: '500',
    game: 'Kolkata Fatafat',
    tr_type: 'Debit',
    status: 0,
  },
  {
    player_name: 'ABC',
    bet_for: '257',
    type: 'Patti',
    amount: '1000',
    game: 'Kolkata Fatafat',
    tr_type: 'Credit',
    status: 1,
  },
  {
    player_name: 'ABC',
    bet_for: '9',
    type: 'Single Digit',
    amount: '600',
    game: '(N) Bengal Fatafat',
    tr_type: 'Credit',
    status: 0,
  },
  {
    player_name: 'BCD',
    bet_for: '5',
    type: 'Single Digit',
    amount: '7000',
    game: '(N) Bengal Fatafat',
    tr_type: 'Credit',
    status: 1,
  },
  {
    player_name: 'ABC',
    bet_for: '367',
    type: 'Patti',
    amount: '300',
    game: '(N) Bengal Fatafat',
    tr_type: 'Debit',
    status: 0,
  },
  {
    player_name: 'ABC',
    bet_for: '0',
    type: 'Single Digit',
    amount: '400',
    game: 'Kolkata Fatafat',
    tr_type: 'Credit',
    status: 0,
  },
  {
    player_name: 'ABC',
    bet_for: '890',
    type: 'Patti',
    amount: '1000',
    game: '(N) Bengal Fatafat',
    tr_type: 'Debit',
    status: 0,
  },
  {
    player_name: 'ABC',
    bet_for: '756',
    type: 'Patti',
    amount: '100',
    game: 'Kolkata Fatafat',
    tr_type: 'Debit',
    status: 1,
  },
  {
    player_name: 'ABC',
    bet_for: '129',
    type: 'Patti',
    amount: '800',
    game: 'Kolkata Fatafat',
    tr_type: 'Credit',
    status: 1,
  },
];

export const TopBidBF = [
  {
    player_name: 'ABC',
    bet_for: '3',
    type: 'Single Digit',
    amount: '50000',
    game: '(N) Bengal Fatafat',
  },
  {
    player_name: 'BCD',
    bet_for: '477',
    type: 'Patti',
    amount: '45000',
    game: '(N) Bengal Fatafat',
  },
  {
    player_name: 'ABC',
    bet_for: '257',
    type: 'Patti',
    amount: '32000',
    game: '(N) Bengal Fatafat',
  },
];

export const TopBidKF = [
  {
    player_name: 'ABC',
    bet_for: '9',
    type: 'Single Digit',
    amount: '70000',
    game: '(N) Bengal Fatafat',
  },
  {
    player_name: 'BCD',
    bet_for: '347',
    type: 'Patti',
    amount: '50000',
    game: 'Kolkata Fatafat',
  },
  {
    player_name: 'ABC',
    bet_for: '257',
    type: 'Patti',
    amount: '18000',
    game: 'Kolkata Fatafat',
  },
];

export const AdminListView = [
  {
    name: 'Admin1',
    role: 'Admin',
    user_id: Math.floor(Math.random() * 20 + 1),
    phone: '9870564376',
    email: 'admin@admin.com',
    photo: '',
    upi: 'abc@paytm',
    kyc: '5435685326409',
    last_login: new Date(),
    status: 1,
  },
  {
    name: 'Manager1',
    role: 'Manager',
    user_id: Math.floor(Math.random() * 20 + 1),
    phone: '7845569376',
    email: 'admin@admin.com',
    photo: '',
    upi: 'abc@paytm',
    kyc: '5435685326409',
    last_login: new Date(),
    status: 1,
  },
];
function getRandomDate() {
  const startDate = new Date('2023-05-01');
  const endDate = new Date('2023-06-30');
  const timeDiff = endDate.getTime() - startDate.getTime();
  const randomTime = Math.random() * timeDiff;
  const randomDate = new Date(startDate.getTime() + randomTime);
  return randomDate.toISOString().slice(0, 10);
}
function randomTime() {
  let hrs = Math.round(Math.random() * 24);
  let mins = Math.round(Math.random() * 60);
  var hFormat = hrs < 10 ? '0' : '';
  var mFormat = mins < 10 ? '0' : '';
  var amPm = hrs < 12 ? 'AM' : 'PM';
  var is12 = hrs % 12 === 0;

  return amPm === 'AM' && !is12
    ? String(hFormat + hrs + ':' + mFormat + mins + ' ' + amPm)
    : 'AM' && is12
    ? String(12 + ':' + mFormat + mins + ' ' + amPm)
    : is12
    ? String(hFormat + hrs + ':' + mFormat + mins + ' ' + amPm)
    : String(hFormat + (hrs - 12) + ':' + mFormat + mins + ' ' + amPm);
}
export const UserListView = [
  {
    player_name: 'ABC',
    player_id: '1',
    phone: '9870564376',
    photo: '',
    upi: 'abc@paytm',
    match_played: '120',
    total_winning_amount: '32000',
    win_game: '12',
    wallet_balance: '3600',
    last_login: getRandomDate(),
    status: 1,
  },
  // {
  //   player_name: 'XYZ',
  //   player_id: '2',
  //   phone: '9805623276',
  //   photo: '',
  //   upi: 'xyz@paytm',
  //   match_played: '79',
  //   total_winning_amount: '5380',
  //   win_game: '4',
  //   wallet_balance: '1200',
  //   last_login: getRandomDate(),
  //   status: 1,
  // },
];

export const ContestList = [
  {
    date: getRandomDate(),
    time: '10:00',
    winning_dig: '7',
    Patti: '386',
    status: 'finished',
    winners: [
      { name: 'xyz', player_id: '20', won_for: '7', winning_amount: '300' },
      { name: 'ASD', player_id: '78', won_for: '386', winning_amount: '300' },
      { name: 'RTY', player_id: '4', won_for: '386', winning_amount: '300' },
      { name: 'ABC', player_id: '121', won_for: '7', winning_amount: '300' },
      { name: 'WQE', player_id: '45', won_for: '7', winning_amount: '300' },
      { name: 'MNO', player_id: '8', won_for: '386', winning_amount: '300' },
      { name: 'BGH', player_id: '225', won_for: '386', winning_amount: '300' },
    ],
    total_winning_amount: '22000',
    heighest_bet: '3000',
    total_bet: '672',
    total_player: '358',
    game: '(N) Bengal Fatafat',
    bet_details: [
      {
        bet_for: '1',
        type: 'single_dig',
        total_amount: '32000',
        total_bet: '4',
        total_player: '8',
        players: [
          {
            name: 'abc',
            amount: '100',
            transaction_id: '1234',
            user_id: '20',
            time: randomTime(),
          },
          {
            name: 'abc',
            amount: '150',
            transaction_id: '1234',
            user_id: '20',
            time: randomTime(),
          },
          {
            name: 'abc',
            amount: '500',
            transaction_id: '1234',
            user_id: '20',
            time: randomTime(),
          },
          {
            name: 'mno',
            amount: '100',
            transaction_id: '856756',
            user_id: '40',
            time: randomTime(),
          },
        ],
      },
      {
        bet_for: '2',
        type: 'single_dig',
        total_amount: '51000',
        total_bet: '630',
        total_player: '70',
        players: [
          {
            name: 'abc',
            amount: '100',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'abc',
            amount: '150',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'abc',
            amount: '500',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'mno',
            amount: '100',
            transaction_id: '856756',
            user_id: '40',
          },
        ],
      },
      {
        bet_for: '3',
        type: 'single_dig',
        total_amount: '11000',
        total_bet: '120',
        players: [
          {
            name: 'abc',
            amount: '100',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'abc',
            amount: '150',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'abc',
            amount: '500',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'mno',
            amount: '100',
            transaction_id: '856756',
            user_id: '40',
          },
        ],
      },
      {
        bet_for: '4',
        type: 'single_dig',
        total_amount: '77000',
        total_bet: '469',
        players: [
          {
            name: 'abc',
            amount: '100',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'abc',
            amount: '150',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'abc',
            amount: '500',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'mno',
            amount: '100',
            transaction_id: '856756',
            user_id: '40',
          },
        ],
      },
      {
        bet_for: '200',
        type: 'patti',
        total_amount: '65800',
        total_bet: '528',
        players: [
          {
            name: 'abc',
            amount: '100',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'abc',
            amount: '150',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'abc',
            amount: '500',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'mno',
            amount: '100',
            transaction_id: '856756',
            user_id: '40',
          },
        ],
      },
      {
        bet_for: '300',
        type: 'patti',
        total_amount: '107000',
        total_bet: '745',
        players: [
          {
            name: 'abc',
            amount: '100',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'abc',
            amount: '150',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'abc',
            amount: '500',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'mno',
            amount: '100',
            transaction_id: '856756',
            user_id: '40',
          },
        ],
      },
      {
        bet_for: '400',
        type: 'patti',
        total_amount: '5000',
        total_bet: '78',
        players: [
          {
            name: 'abc',
            amount: '100',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'abc',
            amount: '150',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'abc',
            amount: '500',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'mno',
            amount: '100',
            transaction_id: '856756',
            user_id: '40',
          },
        ],
      },
      {
        bet_for: '800',
        type: 'patti',
        total_amount: '62000',
        total_bet: '482',
        players: [
          {
            name: 'abc',
            amount: '100',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'abc',
            amount: '150',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'abc',
            amount: '500',
            transaction_id: '1234',
            user_id: '20',
          },
          {
            name: 'mno',
            amount: '100',
            transaction_id: '856756',
            user_id: '40',
          },
        ],
      },
    ],
  },
  {
    date: getRandomDate(),
    time: '10:30',
    winning_dig: '6',
    Patti: '259',
    status: 'finished',
    winners: [
      { name: 'xyz', player_id: '20', won_for: '7', winning_amount: '300' },
      { name: 'ASD', player_id: '78', won_for: '386', winning_amount: '300' },
      { name: 'RTY', player_id: '4', won_for: '386', winning_amount: '300' },
      { name: 'ABC', player_id: '121', won_for: '7', winning_amount: '300' },
      { name: 'WQE', player_id: '45', won_for: '7', winning_amount: '300' },
      { name: 'MNO', player_id: '8', won_for: '386', winning_amount: '300' },
      { name: 'BGH', player_id: '225', won_for: '386', winning_amount: '300' },
    ],
    total_winning_amount: '6000',
    heighest_bet: '3800',
    total_bet: '672',
    total_player: '358',
    game: '(N) Bengal Fatafat',
  },
  {
    date: getRandomDate(),
    time: '11:00',
    winning_dig: '3',
    Patti: '355',
    status: 'finished',
    winners: [
      { name: 'xyz', player_id: '20', won_for: '7', winning_amount: '300' },
      { name: 'ASD', player_id: '78', won_for: '386', winning_amount: '300' },
      { name: 'RTY', player_id: '4', won_for: '386', winning_amount: '300' },
      { name: 'ABC', player_id: '121', won_for: '7', winning_amount: '300' },
      { name: 'WQE', player_id: '45', won_for: '7', winning_amount: '300' },
      { name: 'MNO', player_id: '8', won_for: '386', winning_amount: '300' },
      { name: 'BGH', player_id: '225', won_for: '386', winning_amount: '300' },
    ],
    total_winning_amount: '52000',
    heighest_bet: '7300',
    total_bet: '672',
    total_player: '358',
    game: '(N) Bengal Fatafat',
  },
  {
    date: getRandomDate(),
    time: '11:30',
    winning_dig: '5',
    Patti: '447',
    status: 'finished',
    winners: [
      { name: 'xyz', player_id: '20', won_for: '7', winning_amount: '300' },
      { name: 'ASD', player_id: '78', won_for: '386', winning_amount: '300' },
      { name: 'RTY', player_id: '4', won_for: '386', winning_amount: '300' },
      { name: 'ABC', player_id: '121', won_for: '7', winning_amount: '300' },
      { name: 'WQE', player_id: '45', won_for: '7', winning_amount: '300' },
      { name: 'MNO', player_id: '8', won_for: '386', winning_amount: '300' },
      { name: 'BGH', player_id: '225', won_for: '386', winning_amount: '300' },
    ],
    total_winning_amount: '54500',
    heighest_bet: '7000',
    total_bet: '672',
    total_player: '358',
    game: '(N) Bengal Fatafat',
  },
  {
    date: getRandomDate(),
    time: '12:00',
    winning_dig: '3',
    Patti: '490',
    status: 'live',
    winners: [
      { name: 'xyz', player_id: '20', won_for: '7', winning_amount: '300' },
      { name: 'ASD', player_id: '78', won_for: '386', winning_amount: '300' },
      { name: 'RTY', player_id: '4', won_for: '386', winning_amount: '300' },
      { name: 'ABC', player_id: '121', won_for: '7', winning_amount: '300' },
      { name: 'WQE', player_id: '45', won_for: '7', winning_amount: '300' },
      { name: 'MNO', player_id: '8', won_for: '386', winning_amount: '300' },
      { name: 'BGH', player_id: '225', won_for: '386', winning_amount: '300' },
    ],
    total_winning_amount: '42000',
    heighest_bet: '6000',
    total_bet: '672',
    total_player: '358',
    game: '(N) Bengal Fatafat',
  },
  {
    date: getRandomDate(),
    time: '12:30',
    winning_dig: '0',
    Patti: '145',
    status: 'upcoming',
    winners: [
      { name: 'xyz', player_id: '20', won_for: '7', winning_amount: '300' },
      { name: 'ASD', player_id: '78', won_for: '386', winning_amount: '300' },
      { name: 'RTY', player_id: '4', won_for: '386', winning_amount: '300' },
      { name: 'ABC', player_id: '121', won_for: '7', winning_amount: '300' },
      { name: 'WQE', player_id: '45', won_for: '7', winning_amount: '300' },
      { name: 'MNO', player_id: '8', won_for: '386', winning_amount: '300' },
      { name: 'BGH', player_id: '225', won_for: '386', winning_amount: '300' },
    ],
    total_winning_amount: '13600',
    heighest_bet: '6100',
    total_bet: '672',
    total_player: '358',
    game: '(N) Bengal Fatafat',
  },
  {
    date: getRandomDate(),
    time: '13:00',
    winning_dig: '5',
    Patti: '267',
    status: 'upcoming',
    winners: [
      { name: 'xyz', player_id: '20', won_for: '7', winning_amount: '300' },
      { name: 'ASD', player_id: '78', won_for: '386', winning_amount: '300' },
      { name: 'RTY', player_id: '4', won_for: '386', winning_amount: '300' },
      { name: 'ABC', player_id: '121', won_for: '7', winning_amount: '300' },
      { name: 'WQE', player_id: '45', won_for: '7', winning_amount: '300' },
      { name: 'MNO', player_id: '8', won_for: '386', winning_amount: '300' },
      { name: 'BGH', player_id: '225', won_for: '386', winning_amount: '300' },
    ],
    total_winning_amount: '42000',
    heighest_bet: '3000',
    total_bet: '672',
    total_player: '358',
    game: '(N) Bengal Fatafat',
  },
  {
    date: getRandomDate(),
    time: '13:30',
    winning_dig: '9',
    Patti: '108',
    status: 'upcoming',
    winners: [
      { name: 'xyz', player_id: '20', won_for: '7', winning_amount: '300' },
      { name: 'ASD', player_id: '78', won_for: '386', winning_amount: '300' },
      { name: 'RTY', player_id: '4', won_for: '386', winning_amount: '300' },
      { name: 'ABC', player_id: '121', won_for: '7', winning_amount: '300' },
      { name: 'WQE', player_id: '45', won_for: '7', winning_amount: '300' },
      { name: 'MNO', player_id: '8', won_for: '386', winning_amount: '300' },
      { name: 'BGH', player_id: '225', won_for: '386', winning_amount: '300' },
    ],
    total_winning_amount: '8000',
    heighest_bet: '3500',
    total_bet: '672',
    total_player: '358',
    game: '(N) Bengal Fatafat',
  },
  {
    date: getRandomDate(),
    time: '10:00',
    winning_dig: '7',
    Patti: '386',
    status: 'finished',
    winners: [
      { name: 'xyz', player_id: '20', won_for: '7', winning_amount: '300' },
      { name: 'ASD', player_id: '78', won_for: '386', winning_amount: '300' },
      { name: 'RTY', player_id: '4', won_for: '386', winning_amount: '300' },
      { name: 'ABC', player_id: '121', won_for: '7', winning_amount: '300' },
      { name: 'WQE', player_id: '45', won_for: '7', winning_amount: '300' },
      { name: 'MNO', player_id: '8', won_for: '386', winning_amount: '300' },
      { name: 'BGH', player_id: '225', won_for: '386', winning_amount: '300' },
    ],
    total_winning_amount: '42000',
    heighest_bet: '5000',
    total_bet: '672',
    total_player: '358',
    game: 'Kolkata Fatafat',
  },
  {
    date: getRandomDate(),
    time: '10:30',
    winning_dig: '6',
    Patti: '259',
    status: 'finished',
    winners: [
      { name: 'xyz', player_id: '20', won_for: '7', winning_amount: '300' },
      { name: 'ASD', player_id: '78', won_for: '386', winning_amount: '300' },
      { name: 'RTY', player_id: '4', won_for: '386', winning_amount: '300' },
      { name: 'ABC', player_id: '121', won_for: '7', winning_amount: '300' },
      { name: 'WQE', player_id: '45', won_for: '7', winning_amount: '300' },
      { name: 'MNO', player_id: '8', won_for: '386', winning_amount: '300' },
      { name: 'BGH', player_id: '225', won_for: '386', winning_amount: '300' },
    ],
    total_winning_amount: '12000',
    heighest_bet: '3600',
    total_bet: '672',
    total_player: '358',
    game: 'Kolkata Fatafat',
  },
  {
    date: getRandomDate(),
    time: '11:00',
    winning_dig: '3',
    Patti: '355',
    status: 'finished',
    winners: [
      { name: 'xyz', player_id: '20', won_for: '7', winning_amount: '300' },
      { name: 'ASD', player_id: '78', won_for: '386', winning_amount: '300' },
      { name: 'RTY', player_id: '4', won_for: '386', winning_amount: '300' },
      { name: 'ABC', player_id: '121', won_for: '7', winning_amount: '300' },
      { name: 'WQE', player_id: '45', won_for: '7', winning_amount: '300' },
      { name: 'MNO', player_id: '8', won_for: '386', winning_amount: '300' },
      { name: 'BGH', player_id: '225', won_for: '386', winning_amount: '300' },
    ],
    total_winning_amount: '31000',
    heighest_bet: '2500',
    total_bet: '672',
    total_player: '358',
    game: 'Kolkata Fatafat',
  },
  {
    date: getRandomDate(),
    time: '11:30',
    winning_dig: '5',
    Patti: '447',
    status: 'finished',
    winners: [
      { name: 'xyz', player_id: '20', won_for: '7', winning_amount: '300' },
      { name: 'ASD', player_id: '78', won_for: '386', winning_amount: '300' },
      { name: 'RTY', player_id: '4', won_for: '386', winning_amount: '300' },
      { name: 'ABC', player_id: '121', won_for: '7', winning_amount: '300' },
      { name: 'WQE', player_id: '45', won_for: '7', winning_amount: '300' },
      { name: 'MNO', player_id: '8', won_for: '386', winning_amount: '300' },
      { name: 'BGH', player_id: '225', won_for: '386', winning_amount: '300' },
    ],
    total_winning_amount: '8500',
    heighest_bet: '5700',
    total_bet: '672',
    total_player: '358',
    game: 'Kolkata Fatafat',
  },
  {
    date: getRandomDate(),
    time: '12:30',
    winning_dig: '3',
    Patti: '490',
    status: 'live',
    winners: [
      { name: 'xyz', player_id: '20', won_for: '7', winning_amount: '300' },
      { name: 'ASD', player_id: '78', won_for: '386', winning_amount: '300' },
      { name: 'RTY', player_id: '4', won_for: '386', winning_amount: '300' },
      { name: 'ABC', player_id: '121', won_for: '7', winning_amount: '300' },
      { name: 'WQE', player_id: '45', won_for: '7', winning_amount: '300' },
      { name: 'MNO', player_id: '8', won_for: '386', winning_amount: '300' },
      { name: 'BGH', player_id: '225', won_for: '386', winning_amount: '300' },
    ],
    total_winning_amount: '73000',
    heighest_bet: '4300',
    total_bet: '672',
    total_player: '358',
    game: 'Lucky Mumbai',
  },
  {
    date: getRandomDate(),
    time: '13:00',
    winning_dig: '3',
    Patti: '490',
    status: 'live',
    winners: [
      { name: 'xyz', player_id: '20', won_for: '7', winning_amount: '300' },
      { name: 'ASD', player_id: '78', won_for: '386', winning_amount: '300' },
      { name: 'RTY', player_id: '4', won_for: '386', winning_amount: '300' },
      { name: 'ABC', player_id: '121', won_for: '7', winning_amount: '300' },
      { name: 'WQE', player_id: '45', won_for: '7', winning_amount: '300' },
      { name: 'MNO', player_id: '8', won_for: '386', winning_amount: '300' },
      { name: 'BGH', player_id: '225', won_for: '386', winning_amount: '300' },
    ],
    total_winning_amount: '89000',
    heighest_bet: '9000',
    total_bet: '672',
    total_player: '358',
    game: 'Lucky Mumbai',
  },
];
export const Wallet = [
  {
    player_name: 'ABC',
    player_id: Math.floor(Math.random() * 20 + 1),
    request_for: 'Add Money',
    transaction_id: Math.floor(Math.random() * 10000 + 9999),
    date: randomTime(),
    amount: '100',
    status: 0,
  },
  {
    player_name: 'BCD',
    player_id: Math.floor(Math.random() * 20 + 1),
    request_for: 'Add Money',
    transaction_id: Math.floor(Math.random() * 10000 + 9999),
    date: randomTime(),
    amount: '500',
    status: 0,
  },
  {
    player_name: 'ABC',
    player_id: Math.floor(Math.random() * 20 + 1),
    request_for: 'Add Money',
    transaction_id: Math.floor(Math.random() * 10000 + 9999),
    date: randomTime(),
    amount: '1000',
    status: 1,
  },
  {
    player_name: 'ABC',
    player_id: Math.floor(Math.random() * 20 + 1),
    request_for: 'Withdraw',
    transaction_id: Math.floor(Math.random() * 10000 + 9999),
    date: randomTime(),
    amount: '600',
    status: 0,
  },
  {
    player_name: 'BCD',
    player_id: Math.floor(Math.random() * 20 + 1),
    request_for: 'Add Money',
    transaction_id: Math.floor(Math.random() * 10000 + 9999),
    date: randomTime(),
    amount: '7000',
    status: 1,
  },
  {
    player_name: 'ABC',
    player_id: Math.floor(Math.random() * 20 + 1),
    request_for: 'Withdraw',
    transaction_id: Math.floor(Math.random() * 10000 + 9999),
    date: randomTime(),
    amount: '300',
    status: 0,
  },
  {
    player_name: 'ABC',
    player_id: Math.floor(Math.random() * 20 + 1),
    request_for: 'Withdraw',
    transaction_id: Math.floor(Math.random() * 10000 + 9999),
    date: randomTime(),
    amount: '400',
    status: 0,
  },
  {
    player_name: 'ABC',
    player_id: Math.floor(Math.random() * 20 + 1),
    request_for: 'Add Money',
    transaction_id: Math.floor(Math.random() * 10000 + 9999),
    date: randomTime(),
    amount: '1000',
    status: 0,
  },
  {
    player_name: 'ABC',
    player_id: Math.floor(Math.random() * 20 + 1),
    request_for: 'Withdraw',
    transaction_id: Math.floor(Math.random() * 10000 + 9999),
    date: randomTime(),
    amount: '100',
    status: 1,
  },
  {
    player_name: 'ABC',
    player_id: Math.floor(Math.random() * 20 + 1),
    request_for: 'Withdraw',
    transaction_id: Math.floor(Math.random() * 10000 + 9999),
    date: randomTime(),
    amount: '800',
    status: 1,
  },
];

export const user = {
  name: 'ABC',
  id: '1',
  role: 'admin',
};

export const pattiFakeData = [
  [100, 678, 777, 560, 470, 155],
  [200, 345, 444, 570, 480, 129],
  [300, 120, 111, 580, 490, 112],
  [400, 789, 888, 590, 130, 680],
  [500, 678, 777, 560, 470, 155],
  [600, 345, 444, 570, 480, 129],
  [700, 120, 111, 580, 490, 112],
  [800, 789, 888, 590, 130, 680],
  [900, 789, 888, 590, 130, 680],
];

export const pattiListFake = [
  {
    patti: '100',
    patti_value: '100',
    digit_value: '1',
  },
  {
    patti: '777',
    patti_value: '777',
    digit_value: '1',
  },
  {
    patti: '560',
    patti_value: '560',
    digit_value: '1',
  },
  {
    patti: '119',
    patti_value: '119',
    digit_value: '1',
  },
  {
    patti: '399',
    patti_value: '399',
    digit_value: '1',
  },
  {
    patti: '200',
    patti_value: '200',
    digit_value: '2',
  },
  {
    patti: '345',
    patti_value: '345',
    digit_value: '2',
  },
  {
    patti: '660',
    patti_value: '660',
    digit_value: '2',
  },
  {
    patti: '147',
    patti_value: '147',
    digit_value: '2',
  },
  {
    patti: '228',
    patti_value: '228',
    digit_value: '2',
  },
];
// ------------------------------------------------- filters ---------------------------------------------
export const typeFilter = [
  {
    name: 'Single Digit',
    value: 'single_dig',
  },
  {
    name: 'Patti',
    value: 'patti',
  },
];

export const gameFilter = [
  {
    name: '(N) Bengal Fatafat',
    value: '(N) Bengal Fatafat',
  },
  {
    name: 'Kolkata Fatafat',
    value: 'Kolkata Fatafat',
  },
  {
    name: 'Lucky Mumbai',
    value: 'Lucky Mumbai',
  },
];

export const creditFilter = [
  {
    name: 'Credit',
    value: 'Credit',
  },
  {
    name: 'Debit',
    value: 'Debit',
  },
];

export const walletFilterData = [
  {
    name: 'Add Money',
    value: 'Add Money',
  },
  {
    name: 'Withdraw',
    value: 'Withdraw',
  },
];
export const roleFilter = [
  {
    name: 'Admin',
    value: 'Admin',
  },
  {
    name: 'Manager',
    value: 'Manager',
  },
];
export const statusFilter = [
  {
    name: 'Active',
    value: '1',
  },
  {
    name: 'Inactive',
    value: '0',
  },
];

export const profileImage = '../../assets/profile.png';
export const logo = logoImg;