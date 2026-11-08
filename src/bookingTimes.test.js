import { describe, test, expect, vi } from 'vitest';
import { initializeTimes, updateTimes } from './bookingTimesReducer';
import * as api from './api';

describe('Booking Times Reducer with API', () => {
  // Step 1: Update the test for initializeTimes
  test('initializeTimes calls fetchAPI and returns a non-empty array of available booking times', () => {
    const mockExpectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const fetchSpy = vi.spyOn(api, 'fetchAPI').mockReturnValue(mockExpectedTimes);

    const result = initializeTimes();

    expect(fetchSpy).toHaveBeenCalled();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual(mockExpectedTimes);
    expect(result.length).toBeGreaterThan(0);

    fetchSpy.mockRestore();
  });

  // Step 2: Update the test for updateTimes
  test('updateTimes calls fetchAPI with pre-selected date and returns updated times', () => {
    const selectedDate = '2026-11-20';
    const mockUpdatedTimes = ['18:00', '19:30', '20:30', '21:00'];
    const fetchSpy = vi.spyOn(api, 'fetchAPI').mockReturnValue(mockUpdatedTimes);

    const initialState = ['17:00', '18:00'];
    const action = {
      type: 'UPDATE_TIMES',
      date: selectedDate,
    };

    const result = updateTimes(initialState, action);

    expect(fetchSpy).toHaveBeenCalledWith(new Date(selectedDate));
    expect(result).toEqual(mockUpdatedTimes);

    fetchSpy.mockRestore();
  });

  test('updateTimes returns previous state when unknown action type is provided', () => {
    const currentState = ['17:00', '18:00', '19:00'];
    const action = { type: 'NON_EXISTENT_ACTION' };

    const result = updateTimes(currentState, action);
    expect(result).toEqual(currentState);
  });
});
