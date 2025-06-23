export const config = {
  apiUrl: 'https://cabalbot.tech:11111',
  reconnectTimeout: 1000,

  showUAConnected: true, //  handleUserActivityConnected
  showTradesConnected: true, // handleTradeStreamConnected
  showTradeEventLog: true,
  showTokenStatus: true,
  showSendMessageResponseLog: false, // sendMessageToActiveTab
  showSubscribeTokenReceiveMsg: true, // handleSubscribeTokenMessage
  showTradeStats: true, // handleUserActivityTradeStats
  showReceivedMessages: true, // handleMessagesToBackground
  showStreamConnected: true, // checkConnectionStatus
  showOnChangeTab: true, // changeTab
  showHandleUserActivityPong: false, // handleUserActivityPong
};
