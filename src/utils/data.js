const db = require("./db");
const uuid = require("uuid");

function fetchList(filter_visible = true, filter_enable = true) {
  let res = db.get();
  if (filter_enable) res = res.filter((r) => !!r.enabled);
  if (filter_visible) res = res.filter((r) => !!r.visible);
  return res;
}

function delLive(live_id) {
  db.remove((r) => r.id === live_id);
}

function getLive(live_id) {
  const results = db.get((r) => r.id === live_id);
  if (results.length) return results[0];
  else return null;
}

function regenLive(live_id) {
  const result = getLive(live_id);
  if (result) {
    result.token = uuid.v4();
    db.update((r) => r.id === live_id, result);
  }
}

function setLiveDisabled(live_id, state) {
  db.update((r) => r.id === live_id, { disabled: state });
}

function setLiveVisible(live_id, state) {
  db.update((r) => r.id === live_id, { visible: state });
}

function authLive(live_id, live_token) {
  return !!db.get((r) => r.id === live_id && r.token === live_token).length;
}

function addLive(live_title, live_id = null) {
  if (!live_id) live_id = uuid.v4();
  if (db.get((r) => r.id === live_id).length) return null;
  else {
    const live = {
      id: live_id,
      token: uuid.v4(),
      title: live_title,
      enabled: true,
      visible: true,
    };
    db.add(live);
    return live;
  }
}

function exportList(list) {
  let ret = {
    Categories: [
      {
        Name: "校园直播",
        Hidden: true,
        Cid: "uestclug",
        Channels: [],
      },
    ],
  };
  list.forEach((e) => {
    ret.Categories[0].Channels.push({
      Name: e.title,
      Vid: e.id,
    });
  });
  return ret;
}

module.exports = {
  addLive,
  delLive,
  regenLive,
  setLiveDisabled,
  setLiveVisible,
  authLive,
  fetchList,
  exportList,
};
