import requests


def main():
    url = "http://localhost:8000/scan"
    sample = {"text": "Guaranteed IPO allotment if you invest 50,000 today!"}
    try:
        resp = requests.post(url, json=sample, timeout=20)
        print("Status:", resp.status_code)
        print("Response:", resp.json())
    except Exception as e:
        print("Error:", e)


if __name__ == "__main__":
    main()


