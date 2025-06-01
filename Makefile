.PHONY: run
run:
	PYTHONPATH=/home/sanda/projects/kubeedu uvicorn backend.main:app --reload

.PHONY: install
install:
	pip install -r backend/requirements.txt
