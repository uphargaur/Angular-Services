import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private data = [
    { "roll_no": 1, "name": "Ram" },
    { "roll_no": 2, "percentage": 70, "city": "Delhi" },
    { "roll_no": 1, "percentage": 85 },
    { "roll_no": 3, "name": "Sita" },
    { "roll_no": 2, "name": "Shyam" },
    { "roll_no": 4, "percentage": 90 },
    { "roll_no": 3, "percentage": 88, "city": "Mumbai" },
    { "roll_no": 5, "name": "Lakshman", "city": "Kolkata" },
    { "roll_no": 6, "percentage": 76 },
    { "roll_no": 4, "name": "Bharat", "city": "Chennai" },
    { "roll_no": 1, "city": "Jaipur" },
    { "roll_no": 5, "percentage": 92 },
    { "roll_no": 6, "name": "Hanuman" },
    { "roll_no": 7, "name": "Sugreev", "percentage": 68 },
    { "roll_no": 3, "city": "Bangalore" },
    { "roll_no": 8, "name": "Vibhishan", "percentage": 80, "city": "Pune" },
    { "roll_no": 2, "percentage": 78 },
    { "roll_no": 9, "name": "Angad", "city": "Hyderabad" },
    { "roll_no": 10, "percentage": 82 },
    { "roll_no": 7, "city": "Ahmedabad" },
    { "roll_no": 4, "percentage": 88 },
    { "roll_no": 9, "percentage": 75 }
  ];


  fetchData(): Observable<any[]> {
    return of(this.data);
  }

  restructureData(data: any[]): any[] {
    const studentMap = new Map<number, any>();

    data.forEach(entry => {
      const rollNo = entry.roll_no;

      if (studentMap.has(rollNo)) {
        const existingEntry = studentMap.get(rollNo);
        studentMap.set(rollNo, { ...existingEntry, ...entry });
      } else {
        studentMap.set(rollNo, { ...entry });
      }
    });

    return Array.from(studentMap.values());
  }

  downloadJson(data: any[], filename = 'modified_data.json') {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
