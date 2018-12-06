// import { baseUrl } from './env'
import {Message} from 'element-ui'

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
	type = type.toUpperCase();
	// url = baseUrl + url;

	if (type == 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		});

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}
	function urlStringData(data) {
    let dataStr = ''; //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    });

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      // url = url + '?' + dataStr;
    }
    return dataStr;
  }
	if (window.fetch && method == 'fetch') {
		let requestConfig = {
			credentials: 'include',
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
				// 'Content-Type': 'application/json'
			},
			mode: "cors",
			cache: "no-store"
			// cache: "force-cache"
		};

		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
        value: urlStringData(data) + '&' + 'csrfmiddlewaretoken=' + window.localStorage.getItem('csrfmiddlewaretoken')
			});
		}

		try {
			const response = await fetch(url, requestConfig);
			const responseJson = await response.json();
      if(responseJson.code == -1){
        /* 登录过期情况 */
        Message({
          type: 'warning',
          message: '登录信息已过期,请重新登录'
        });
        window.location.href = '/backstage/';
      }
			return responseJson
		} catch (error) {
			throw new Error(error)
		}
	} else {
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}
			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}
			requestObj.open(type, url, true);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send(sendData);
			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response;
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
            if(obj.code == -1){
              /* 登录过期情况 */
              window.location.href = '/backstage/';
            }
						resolve(obj);
					} else {
						reject(requestObj)
					}
				}
			}
		})
	}
}
