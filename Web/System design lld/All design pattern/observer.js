class NotificationObserver {
    notifyVideo(channel, videoTitle, subsrciption) {
        console.log(`Hi ${subsrciption} New video:- ${videoTitle} has been uploaded in ${channel}`);
    }

    notifyComment(user, videoTitle) {
        console.log(`New comment by ${user} on Video: ${videoTitle}`);
    }
}

class Notifier {
    constructor() {
        this.notifier = new NotificationObserver();
    }
    notifyVideo(channel, videoTitle, subscribers) {
        subscribers.forEach((s) => this.notifier.notifyVideo(channel, videoTitle, s))
    }

    notifyComment(user, videoTitle, subscribers) {
        subscribers.forEach((s) => this.notifier.notifyVideo(user, videoTitle))
    }
}

class YoutubeChannel {
    constructor(channelName, notifier) {
        this.channelName = channelName;
        this.subscribers = [];
        this.videos = []
        this.notifier = notifier;
    }

    videoUpload(videoTitle) {
        // upload video
        this.notifier.notifyVideo(this.channelName, videoTitle, this.subscribers);
    }

    notifyComment(user, videoTitle) {
        // upload video
        this.notifier.notifyComment(user, videoTitle, this.subscribers);
    }
}


const notifier = new Notifier();
const bbk = new YoutubeChannel('BBK', notifier);

bbk.subscribers.push('Amit');
bbk.subscribers.push('Sumit');
bbk.subscribers.push('Vaibhav');

bbk.videoUpload('New Video 1');