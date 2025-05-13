import { retry } from 'rxjs';
import { HttpParams } from '@angular/common/http';

export function delete_null_properties(test: any, recurse: any) {
  for (var i in test) {
    if (test[i] === null) {
      delete test[i];
    } else if (recurse && typeof test[i] === 'object') {
      delete_null_properties(test[i], recurse);
    }
  }
  return test;
}

export const cleanEmpty = (e: any) =>
  e instanceof Object
    ? Object.entries(e).reduce(
        (o: any, [k, v]) => {
          if (typeof v === 'boolean' || v) o[k] = cleanEmpty(v);
          return o;
        },
        e instanceof Array ? [] : {},
      )
    : e;

export function deepCompare(obj1: any, obj2: any) {
  const diffObj: any = Array.isArray(obj2) ? [] : {};
  Object.getOwnPropertyNames(obj2).forEach(function (prop) {
    if (typeof obj2[prop] === 'object') {
      diffObj[prop] = deepCompare(obj1[prop], obj2[prop]);

      // console.log(prop, diffObj[prop], Array.isArray(diffObj[prop]));
      if (Array.isArray(diffObj[prop])) {
        diffObj[prop] = obj2[prop];
        console.log(1, Array.isArray(diffObj[prop]) && JSON.stringify(diffObj[prop]) === JSON.stringify(obj2[prop]));
      } else if (true) {
        console.log(2, JSON.stringify(diffObj[prop]), JSON.stringify(obj2[prop]));
        delete diffObj[prop];
      }
    } else if (obj1[prop] !== obj2[prop]) {
      diffObj[prop] = obj2[prop];
    }
  });
  return diffObj;
}

function arraysEqual(a1: Array<any>, a2: Array<any>) {
  /* WARNING: arrays must not contain {objects}, or behavior may be undefined */
  return JSON.stringify(a1) === JSON.stringify(a2);
}

export function getDirtyFormValues(form: any) {
  let dirtyValues: any = {};

  Object.keys(form.controls).forEach(key => {
    let currentControl = form.controls[key];

    if (currentControl.dirty) {
      if (currentControl.controls) dirtyValues[key] = getDirtyFormValues(currentControl);
      else dirtyValues[key] = currentControl.value;
    }
  });

  if (form.value.files) dirtyValues.files = form.value.files;

  return dirtyValues;
}

export function shuffle(array: Array<any>) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function getCurrentMonthAndYear() {
  const [month, year] = new Date().toLocaleString('en-GB', { month: 'long', year: 'numeric' }).split(' ');
  return { month, year };
}

export function getMonthAndYear(date: Date) {
  const [month, year] = date.toLocaleString('en-GB', { month: 'long', year: 'numeric' }).split(' ');
  return { month, year };
}

export function transformDate(date: Date) {
  if (!date) return null;
  const [day, month, year] = date.toLocaleString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).split(' ');
  return { day, month, year };
}

export function getParams(query: any) {
  if (!query) return null;
  let params: HttpParams = new HttpParams();
  // params = params.appendAll(query); // one element in array not define as array
  Object.entries(query).forEach(([key, value]) => {
    if (value instanceof Array) {
      value.forEach(item => (params = params.append(`${key}[]`, item)));
    } else {
      params = params.append(key, value as string | number | boolean);
    }
  });

  return params;
}

export function prepareFormData(formValues: any): FormData {
  // without object fields, only with an array!!!
  const formData = new FormData();

  if (formValues.files) {
    for (const file of formValues.files) {
      formData.append(file.name, file);
    }
  }

  delete formValues.files;

  Object.entries(formValues).forEach(([key, value]: [string, any]) => {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        formData.append(`${key}[]`, value[i]);
      }
    } else {
      formData.append(key, value);
    }
  });
  return formData;
}
