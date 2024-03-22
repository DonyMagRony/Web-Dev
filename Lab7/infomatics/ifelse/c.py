correct_answer = int(input())
student_answer = int(input())

if correct_answer == 1:
    if student_answer != 1:
        print("NO")
    else:
        print("YES")
else:
    if correct_answer >= 10 and str(correct_answer) == str(correct_answer)[::-1]:
        if student_answer == 1:
            print("NO")
        else:
            print("YES")
    else:
        if student_answer == 1:
            print("NO")
        else:
            print("YES")
qw