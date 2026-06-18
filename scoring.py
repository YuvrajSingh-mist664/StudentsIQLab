"""
Optional Python scoring helper for Students IQ Lab.

This file contains the same scoring formulas used in the website.
"""

from dataclasses import dataclass

@dataclass
class StudentResult:
    score: int
    correct_count: int
    time_bonus: int
    age: int


def calculate_results(result: StudentResult) -> dict:
    base_speed = min(100, max(20, result.time_bonus * 5 + result.correct_count * 10))
    base_iq = min(140, max(70, round(85 + result.score / 4 + result.correct_count * 3)))
    mental_age = round(result.age + (base_iq - 100) / 8 + (base_speed - 60) / 20)
    need = (
        'Practice focus and memory'
        if result.score < 120
        else 'Develop reasoning and speed'
        if result.score < 180
        else 'Keep challenging your brain'
    )
    return {
        'speed': base_speed,
        'iq': base_iq,
        'mental_age': max(6, mental_age),
        'need': need,
    }


if __name__ == '__main__':
    example = StudentResult(score=140, correct_count=3, time_bonus=18, age=12)
    print(calculate_results(example))
