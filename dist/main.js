(()=>{"use strict";!async function(){const t=await async function(){const t=await fetch("http://api.weatherapi.com/v1/forecast.json?key=9da97e80930143a38c213928241202&q=corona&days=3"),e=await t.json();return console.log(e),e}(),e=await async function(t){return{location:t.location.name,condition:t.current.condition.text,sunrise:t.forecast.forecastday[0].astro.sunrise,sunset:t.forecast.forecastday[0].astro.sunset}}(t),n=await async function(t){return{tempF:t.current.temp_f,tempC:t.current.temp_c,humidity:t.current.humidity,wind_mph:t.current.wind_mph}}(t),c=await async function(t){const e=parseInt(t.current.last_updated.slice(11,13));let n=[e+1,e+2,e+3,e+4],c={};for(let e=0;e<n.length;e++)if(n[e]>23){const{temp_f:o,temp_c:a,condition:s,time:i}=t.forecast.forecastday[1].hour[n[e]-23],{text:r}=s;parseInt(i.slice(11,13)),c[n[e]]={temp_f:o,temp_c:a,text:r,splicedTime}}else{const{temp_f:o,temp_c:a,condition:s,time:i}=t.forecast.forecastday[0].hour[n[e]],{text:r}=s;let u=parseInt(i.slice(11,13));0===u?u="12:00 AM":u<=11?u=`${u}:00 AM`:12===u?u="12:00 PM":(u-=12,u=`${u}:00 PM`),c[n[e]]={temp_f:o,temp_c:a,text:r,updatedTime:u}}return{forecast:c}}(t);console.log(c);const o={...e,...n,...c};console.log(o)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoib0JBY0FBLGlCQUNJLE1BQU1DLFFBWEhELGlCQUNILE1BQU1FLFFBQWlCQyxNQUFNLGlHQUV2QkMsUUFBYUYsRUFBU0csT0FJNUIsT0FGQUMsUUFBUUMsSUFBSUgsR0FFTEEsQ0FDWCxDQUcwQkksR0FDaEJDLFFDaEJIVCxlQUErQkksR0FTbEMsTUFBTyxDQUFDSyxTQVJTTCxFQUFLSyxTQUFTQyxLQVFiQyxVQU5BUCxFQUFLUSxRQUFRRCxVQUFVRSxLQU1aQyxRQUpiVixFQUFLVyxTQUFTQyxZQUFZLEdBQUdDLE1BQU1ILFFBSWJJLE9BRnZCZCxFQUFLVyxTQUFTQyxZQUFZLEdBQUdDLE1BQU1DLE9BR3RELENETTJCQyxDQUFnQmxCLEdBQ2pDbUIsUUVqQkhwQixlQUEyQkksR0FNOUIsTUFBTyxDQUFDaUIsTUFMTWpCLEVBQUtRLFFBQVFVLE9BS1pDLE1BSkRuQixFQUFLUSxRQUFRWSxPQUlMQyxTQUhMckIsRUFBS1EsUUFBUWEsU0FHRUMsU0FGZnRCLEVBQUtRLFFBQVFjLFNBR2xDLENGVTJCQyxDQUFZMUIsR0FFN0JjLFFHbkJIZixlQUErQkksR0FDbEMsTUFBTXdCLEVBQVdDLFNBQVN6QixFQUFLUSxRQUFRa0IsYUFBYUMsTUFBTSxHQUFHLEtBTzdELElBQUlDLEVBQVMsQ0FMR0osRUFBVyxFQUNWQSxFQUFXLEVBQ1pBLEVBQVcsRUFDVkEsRUFBVyxHQUl4QmIsRUFBVyxDQUFDLEVBRWhCLElBQUksSUFBSWtCLEVBQUksRUFBR0EsRUFBSUQsRUFBT0UsT0FBUUQsSUFDOUIsR0FBR0QsRUFBT0MsR0FBSyxHQUFHLENBQ2QsTUFBTSxPQUFDWCxFQUFNLE9BQUVFLEVBQU0sVUFBRWIsRUFBUyxLQUFFd0IsR0FBUS9CLEVBQUtXLFNBQVNDLFlBQVksR0FBR29CLEtBQUtKLEVBQU9DLEdBQUssS0FDbEYsS0FBQ3BCLEdBQVFGLEVBR01rQixTQUFTTSxFQUFLSixNQUFNLEdBQUcsS0FDNUNoQixFQUFTaUIsRUFBT0MsSUFBTSxDQUFDWCxTQUFRRSxTQUFRWCxPQUFNd0IsWUFDakQsS0FBTyxDQUNILE1BQU0sT0FBQ2YsRUFBTSxPQUFFRSxFQUFNLFVBQUViLEVBQVMsS0FBRXdCLEdBQVEvQixFQUFLVyxTQUFTQyxZQUFZLEdBQUdvQixLQUFLSixFQUFPQyxLQUM3RSxLQUFDcEIsR0FBUUYsRUFFZixJQUFJMkIsRUFBY1QsU0FBU00sRUFBS0osTUFBTSxHQUFHLEtBQ3RCLElBQWhCTyxFQUNDQSxFQUFjLFdBQ1BBLEdBQWUsR0FDdEJBLEVBQWMsR0FBR0EsVUFDTSxLQUFoQkEsRUFDUEEsRUFBYyxZQUVkQSxHQUFlLEdBQ2ZBLEVBQWMsR0FBR0EsV0FFckJ2QixFQUFTaUIsRUFBT0MsSUFBTSxDQUFDWCxTQUFRRSxTQUFRWCxPQUFNeUIsY0FDakQsQ0FJSixNQUFPLENBQUN2QixXQUNaLENIdEIwQixDQUFpQmQsR0FDdkNLLFFBQVFDLElBQUlRLEdBRVosTUFBTVgsRUFBTyxJQUFJSyxLQUFhVyxLQUFhTCxHQUUzQ1QsUUFBUUMsSUFBSUgsRUFDaEIsQ0FFQW1DLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90ZW1wLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZvcmVjYXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldExvY2F0aW9uRGF0YSB9IGZyb20gXCIuL2xvY2F0aW9uLmpzXCI7XHJcbmltcG9ydCB7IGdldFRlbXBEYXRhIH0gZnJvbSBcIi4vdGVtcC5qc1wiO1xyXG5pbXBvcnQgeyBnZXRGb3JlY2FzdERhdGEgfSBmcm9tIFwiLi9mb3JlY2FzdC5qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKXtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9OWRhOTdlODA5MzAxNDNhMzhjMjEzOTI4MjQxMjAyJnE9Y29yb25hJmRheXM9MycpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNvbWJpbmVkRGF0YSgpe1xyXG4gICAgY29uc3QgYXBpQ2FsbCA9IGF3YWl0IGdldERhdGEoKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gYXdhaXQgZ2V0TG9jYXRpb25EYXRhKGFwaUNhbGwpO1xyXG4gICAgY29uc3QgdGVtcERhdGEgPSBhd2FpdCBnZXRUZW1wRGF0YShhcGlDYWxsKTtcclxuXHJcbiAgICBjb25zdCBmb3JlY2FzdCA9IGF3YWl0KGdldEZvcmVjYXN0RGF0YShhcGlDYWxsKSk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdCk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHsuLi5sb2NhdGlvbiwgLi4udGVtcERhdGEsIC4uLmZvcmVjYXN0fTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxufVxyXG5cclxuY29tYmluZWREYXRhKCk7IiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uRGF0YShkYXRhKSB7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRhdGEubG9jYXRpb24ubmFtZTtcclxuXHJcbiAgICBjb25zdCBjb25kaXRpb24gPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XHJcblxyXG4gICAgY29uc3Qgc3VucmlzZSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZTtcclxuXHJcbiAgICBjb25zdCBzdW5zZXQgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldDtcclxuXHJcbiAgICByZXR1cm4ge2xvY2F0aW9uLCBjb25kaXRpb24sIHN1bnJpc2UsIHN1bnNldH07XHJcbn0iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGVtcERhdGEoZGF0YSl7XHJcbiAgICBjb25zdCB0ZW1wRiA9IGRhdGEuY3VycmVudC50ZW1wX2Y7XHJcbiAgICBjb25zdCB0ZW1wQyA9IGRhdGEuY3VycmVudC50ZW1wX2M7XHJcbiAgICBjb25zdCBodW1pZGl0eSA9IGRhdGEuY3VycmVudC5odW1pZGl0eTtcclxuICAgIGNvbnN0IHdpbmRfbXBoID0gZGF0YS5jdXJyZW50LndpbmRfbXBoO1xyXG5cclxuICAgIHJldHVybiB7dGVtcEYsIHRlbXBDLCBodW1pZGl0eSwgd2luZF9tcGh9XHJcbn0iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3REYXRhKGRhdGEpe1xyXG4gICAgY29uc3QgZGF0ZVRpbWUgPSBwYXJzZUludChkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkLnNsaWNlKDExLDEzKSk7XHJcblxyXG4gICAgY29uc3QgZmlyc3RIciA9IGRhdGVUaW1lICsgMTtcclxuICAgIGNvbnN0IHNlY29uZEhyID0gZGF0ZVRpbWUgKyAyO1xyXG4gICAgY29uc3QgdGhpcmRIciA9IGRhdGVUaW1lICsgMztcclxuICAgIGNvbnN0IGZvdXJ0aEhyID0gZGF0ZVRpbWUgKyA0O1xyXG5cclxuICAgIGxldCBocnNBcnIgPSBbZmlyc3RIciwgc2Vjb25kSHIsIHRoaXJkSHIsIGZvdXJ0aEhyXTtcclxuXHJcbiAgICBsZXQgZm9yZWNhc3QgPSB7fTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgaHJzQXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZihocnNBcnJbaV0gPiAyMyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHt0ZW1wX2YsIHRlbXBfYywgY29uZGl0aW9uLCB0aW1lfSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltocnNBcnJbaV0gLSAyM107XHJcbiAgICAgICAgICAgIGNvbnN0IHt0ZXh0fSA9IGNvbmRpdGlvbjtcclxuICAgICAgICAgICAgLy93YW50IGZvcm1hdCBcIjE6MDAgUE0gb3IgMTA6MDAgQU1cIlxyXG4gICAgICAgICAgICAvLyBjb25zdCBzcGxpY2VkVGltZSA9IHRpbWUuc2xpY2UoMTEsMTYpO1xyXG4gICAgICAgICAgICBjb25zdCBtaWxpdGFyeVRpbWUgPSBwYXJzZUludCh0aW1lLnNsaWNlKDExLDEzKSk7XHJcbiAgICAgICAgICAgIGZvcmVjYXN0W2hyc0FycltpXV0gPSB7dGVtcF9mLCB0ZW1wX2MsIHRleHQsIHNwbGljZWRUaW1lfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB7dGVtcF9mLCB0ZW1wX2MsIGNvbmRpdGlvbiwgdGltZX0gPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaHJzQXJyW2ldXTtcclxuICAgICAgICAgICAgY29uc3Qge3RleHR9ID0gY29uZGl0aW9uO1xyXG4gICAgICAgICAgICAvLyBjb25zdCBzcGxpY2VkVGltZSA9IHRpbWUuc2xpY2UoMTEsMTYpO1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlZFRpbWUgPSBwYXJzZUludCh0aW1lLnNsaWNlKDExLDEzKSk7XHJcbiAgICAgICAgICAgIGlmKHVwZGF0ZWRUaW1lID09PSAwKXtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRUaW1lID0gJzEyOjAwIEFNJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh1cGRhdGVkVGltZSA8PSAxMSl7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkVGltZSA9IGAke3VwZGF0ZWRUaW1lfTowMCBBTWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodXBkYXRlZFRpbWUgPT09IDEyICl7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkVGltZSA9ICcxMjowMCBQTSc7XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRUaW1lIC09IDEyO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZFRpbWUgPSBgJHt1cGRhdGVkVGltZX06MDAgUE1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcmVjYXN0W2hyc0FycltpXV0gPSB7dGVtcF9mLCB0ZW1wX2MsIHRleHQsIHVwZGF0ZWRUaW1lfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7Zm9yZWNhc3R9O1xyXG59Il0sIm5hbWVzIjpbImFzeW5jIiwiYXBpQ2FsbCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXREYXRhIiwibG9jYXRpb24iLCJuYW1lIiwiY29uZGl0aW9uIiwiY3VycmVudCIsInRleHQiLCJzdW5yaXNlIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImFzdHJvIiwic3Vuc2V0IiwiZ2V0TG9jYXRpb25EYXRhIiwidGVtcERhdGEiLCJ0ZW1wRiIsInRlbXBfZiIsInRlbXBDIiwidGVtcF9jIiwiaHVtaWRpdHkiLCJ3aW5kX21waCIsImdldFRlbXBEYXRhIiwiZGF0ZVRpbWUiLCJwYXJzZUludCIsImxhc3RfdXBkYXRlZCIsInNsaWNlIiwiaHJzQXJyIiwiaSIsImxlbmd0aCIsInRpbWUiLCJob3VyIiwic3BsaWNlZFRpbWUiLCJ1cGRhdGVkVGltZSIsImNvbWJpbmVkRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=