export async function randomNumber() {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            if (Math.random() > 0.3) {
                reject(new Error('Random error'));
                return;
            }

            resolve(Math.floor(Math.random() * 100));
        }, 300);
    });

}